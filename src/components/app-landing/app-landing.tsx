import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-landing',
  styleUrl: 'app-landing.css',
  shadow: true,
})
export class AppLanding {
  @State() info: string;
  @State() userName: string;

  textInput! : HTMLTextAreaElement;  

  handleSubmit = (event: Event) => {
    event.preventDefault();
    this.info = this.textInput.value;
    console.log(this.info)
    localStorage.setItem('info', this.info)

    if(this.userName.length > 0) {
      window.location.href = '/final'
    } else {
      window.location.href = '/info'
    }
  }
  

  render() {

    return (
      <section>

        <div class="container">
          <h2 class="header-text">
            {this.userName = localStorage.getItem('name')}, what is on your mind?
          </h2>
        
          <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <textarea class="form-control" ref={(el) => this.textInput = el as HTMLTextAreaElement}></textarea>
              </div>
              <input type="submit" value="Submit" class="submit" />
          </form>
          
        </div>
        
      </section>
    );
  }

}
