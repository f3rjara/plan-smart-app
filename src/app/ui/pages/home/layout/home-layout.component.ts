import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  inject,
  Signal,
} from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { UserUsecase } from '@domain/user/usecases/user.usecase.service';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { StorageHelper } from '@shared/helpers/storage.helper';

/**
 * Componente para el layout de la aplicación de Inicio
 * @export
 * @class LayoutComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Toast],
  providers: [MessageService, TitleCasePipe],
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeLayoutComponent implements AfterViewInit {
  private readonly _messageService = inject(MessageService);
  private readonly _titleCasePipe = inject(TitleCasePipe);
  private readonly _userUseCase = inject(UserUsecase);
  private readonly _cdr = inject(ChangeDetectorRef);
  protected readonly showWelcomeMessage = StorageHelper.shouldShowWelcomeMessage();

  currentUser = this._userUseCase.getUser();
  firstName: Signal<string> = computed(() => {
    const name = this.currentUser()?.name?.split(' ')[0] || 'Usuario';
    return this._titleCasePipe.transform(name);
  });

  ngAfterViewInit(): void {
    this.displayWelcomeMessage();
  }

  private displayWelcomeMessage(): void {
    if (!this.showWelcomeMessage()) return;

    this._messageService.add({
      severity: 'success',
      summary: '¡Bienvenido de nuevo!',
      detail: `Hola ${this.firstName()}, nos alegra verte de nuevo. ¡Esperamos que tengas un gran día!`,
      life: 3000,
    });

    this._cdr.detectChanges();
  }
}
