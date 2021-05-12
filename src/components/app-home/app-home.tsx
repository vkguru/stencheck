import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @State() name: string;

  textInput! : HTMLInputElement;

  handleSubmit = (event: Event) => {
      event.preventDefault();
      this.name = this.textInput.value;
  
      localStorage.setItem('name', this.name)

      console.log(this.name.length)
      // window.location.href = '/info'

      if(this.name.length > 0) {
        window.location.href = '/info'
      } else {
        window.location.href = '/'
      }
  }

  render() {

    return (

      <section>

        <div class="container">
          <h1 class="header-text">Welcome</h1>
        </div>

        <div class="app-home container">
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <input type="text" placeholder="Enter Your Name" class="form-control" ref={(el) => this.textInput = el as HTMLInputElement} />
                </div>
                <input type="submit" value="Submit" class="submit" />
                {/* <button type="submit" class="submit">Submit</button> */}
            </form>
        </div>


      </section>
    );
  }
}
