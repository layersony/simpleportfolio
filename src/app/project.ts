export class Project {
  showfulldetails: boolean;
  constructor(public title:string, public description:string, public role: string, public created:string){
    this.showfulldetails = false
  }
}
