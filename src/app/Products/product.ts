export class Product{
  constructor(public pimg:string,public pname:string,
    public pprice:number,public soh:number){}
}
export class productResolved{
  constructor(public product:any[],public errorMessage:string){}
}
