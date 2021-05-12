import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-final',
  styleUrl: 'app-final.css',
  shadow: true,
})
export class AppFinal {

  @State() name: string;
  @State() output: string;

  render() {
    return (
      <section>
        <div class="result">
          <h2 class="header-text">Final Result</h2>

          <div>
            <p class="name">{this.name = localStorage.getItem('name')}</p>

            <p>{this.output = localStorage.getItem('info')}</p>
          </div>
        </div>
      </section>
    );
  }

}
