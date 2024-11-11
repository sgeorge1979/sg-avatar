import { Component, Prop, h, getAssetPath } from '@stencil/core';



@Component({
  tag: 'sg-avatar',
  styleUrl: 'sg-avatar.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class sgAvatar {

  @Prop() name: string;
  @Prop() rounded: boolean;
  @Prop() size: number;
  @Prop() fontSize: number;
  @Prop() length: number;
  @Prop() background: string;
  @Prop() color: string;
  @Prop() datasrc: string;
  @Prop() avatar: string;
  @Prop() sex: string;

  @Prop() maleImage = "male.png";
  @Prop() femaleImage = "female.png";




  render() {

    let url: string = "https://ui-avatars.com/api/?";
    let result: string;

    this.name ? url += "name=" + this.name : url += "name=";
    this.rounded ? url += "&rounded=true": url += "";
    this.size ? url += "&size=" + this.size : url += "";
    this.fontSize ? url += "&font-size=" + this.fontSize :  url += "";
    this.length ? url += "&length=" + this.length :  url += "";
    this.background ? url += "&background=" + this.background :  url += "";
    this.color ? url += "&color=" + this.color :  url += "";  
    const male = getAssetPath(`./assets/${this.maleImage}`);
    const female = getAssetPath(`./assets/${this.femaleImage}`);

    if(this.avatar == 'face'){
     if(this.datasrc != '' || this.datasrc != null || this.datasrc != undefined){
         result =  <img src={this.datasrc} class={this.rounded ? 'sg-avatar-rounded' :'sg-avatar'} width={this.size} style={{'background-color':this.background}}/> ;
      } 
     if(this.datasrc == '' || this.datasrc == null || this.datasrc == undefined) {
         result =  <img src={this.sex == 'male'? male: female } class={this.rounded ? 'sg-avatar-rounded' :'sg-avatar'} width={this.size} style={{'background-color':this.background}}/> ;
      }
    } else {
       result =<img src={url} /> ; 
    }

    return result;
  }
}
