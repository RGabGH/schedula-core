import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SchedulaGanttComponent, type SchedulaShape } from 'schedula-core-angular';
import { demoData } from '../demo-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, SchedulaGanttComponent],
  template: `
    <div class="wrap">
      <header>
        <h1>SchedulaCore × Angular</h1>
        <p>Official <code>schedula-core-angular</code> wrapper — Free edition.</p>
      </header>

      <div class="controls">
        <label>
          Theme<br />
          <select [(ngModel)]="theme">
            <option value="">Light</option>
            <option value="theme-dark">Dark</option>
            <option value="theme-blue">Blue</option>
            <option value="theme-soft">Soft</option>
          </select>
        </label>
        <label>
          Shape<br />
          <select [(ngModel)]="gStyle">
            <option *ngFor="let s of shapes" [value]="s">{{ s }}</option>
          </select>
        </label>
        <label>
          Days<br />
          <input type="range" min="7" max="90" [(ngModel)]="view" /> {{ view }}
        </label>
        <label>
          Filter<br />
          <input type="text" placeholder="e.g. Design" [(ngModel)]="filter" />
        </label>
      </div>

      <div class="gantt">
        <schedula-gantt
          [data]="data"
          [theme]="theme"
          [gStyle]="gStyle"
          [view]="view"
          [filter]="filter"
          (ready)="onReady($event)"
        ></schedula-gantt>
      </div>
    </div>
  `,
  styles: [`
    .wrap { padding: 16px; }
    header h1 { font-size: 20px; margin: 0; }
    header p { color: #666; margin: 4px 0 0; }
    .controls {
      display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-end;
      margin: 12px 0; padding: 12px; background: #f5f5f7; border-radius: 8px;
    }
    .gantt { border: 1px solid #e3e3e6; border-radius: 8px; overflow: hidden; }
  `],
})
export class AppComponent {
  data = demoData;
  theme = '';
  gStyle: SchedulaShape = 'round-rect';
  view = 30;
  filter = '';
  shapes: SchedulaShape[] = ['round-rect', 'rect', 'arrow', 'circle'];

  onReady(core: any): void {
    console.log('SchedulaCore ready', core);
  }
}
