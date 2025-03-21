import { NgClass } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { DarkThemeDirective } from '@shared/directives/dark-theme.directive';

@Component({
  selector: 'app-design-cards',
  standalone: true,
  imports: [DarkThemeDirective, NgClass],
  templateUrl: './design-cards.component.html',
  styleUrl: './design-cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignCardsComponent implements AfterViewInit, OnDestroy {
  private centerIndexes = [14, 20, 26, 27, 21, 15];
  private originalMovingCardPositions = [14, 20, 21, 27];
  private movingCards: HTMLElement[] = [];
  private intervals: Map<number, number> = new Map();
  movingCardPositions = [...this.originalMovingCardPositions];

  ngAfterViewInit(): void {
    this.resetAnimation();
  }

  ngOnDestroy(): void {
    this.stopMovingAnimations();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.resetAnimation();
  }

  private resetAnimation(): void {
    this.stopMovingAnimations();
    this.movingCardPositions = [...this.originalMovingCardPositions];
    setTimeout(() => this.initAnimationCards(), 150);
  }

  private stopMovingAnimations(): void {
    this.intervals.forEach((intervalId) => clearInterval(intervalId));
    this.intervals.clear();
    this.movingCards = Array.from(document.querySelectorAll('.moving-card')) as HTMLElement[];
    this.movingCards.forEach((card, index) => {
      card.classList.remove('moving-card--animation');
      this.moveToCard(card, this.originalMovingCardPositions[index], false);
    });
  }

  private initAnimationCards(): void {
    if (this.movingCards.length === 0) return;
    this.movingCards.forEach((card, index) => {
      this.moveToCard(card, this.movingCardPositions[index], false);
      setTimeout(() => this.startMovingAnimation(card, index), 1000);
    });
  }

  private moveToCard(card: HTMLElement, index: number, animate: boolean = true): void {
    const targetCard = document.querySelector(`.card-${index}`) as HTMLElement;
    if (!targetCard || !card) return;
    const rect = targetCard.getBoundingClientRect();
    const parentRect = document.querySelector('.image-grid')?.getBoundingClientRect();
    if (!parentRect) return;
    card.classList.toggle('moving-card--animation', animate);
    card.style.transform = `translate(${rect.left - parentRect.left + 6}px, ${rect.top - parentRect.top + 6}px)`;
  }

  private startMovingAnimation(card: HTMLElement, cardIndex: number): void {
    if (this.intervals.has(cardIndex)) clearInterval(this.intervals.get(cardIndex) as number);
    const intervalId = Number(
      setInterval(() => {
        const newIndex =
          (this.centerIndexes.indexOf(this.movingCardPositions[cardIndex]) + 1) % this.centerIndexes.length;
        this.movingCardPositions[cardIndex] = this.centerIndexes[newIndex];
        this.moveToCard(card, this.movingCardPositions[cardIndex], true);
      }, 2500)
    );
    this.intervals.set(cardIndex, intervalId);
  }

  isCenterCard(index: number): boolean {
    return this.centerIndexes.includes(index);
  }
}
