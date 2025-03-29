import { AfterViewInit, ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { UserUsecase } from '@domain/user/usecases/user.usecase.service';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
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

  currentUser = this._userUseCase.getUser();

  ngAfterViewInit(): void {
    setTimeout(() => {
      const firstName = this.currentUser()?.name?.split(' ')[0] || 'Usuario';
      const formattedName = this._titleCasePipe.transform(firstName);
      this._messageService.add({
        severity: 'success',
        summary: '¡Bienvenido de nuevo!',
        detail: `Hola ${formattedName}, nos alegra verte de nuevo. ¡Esperamos que tengas un gran día!`,
        life: 3000,
      });
    }, 0);
  }
}
