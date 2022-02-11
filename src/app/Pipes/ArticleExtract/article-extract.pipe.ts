import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'articleExtract'
})
export class ArticleExtractPipe implements PipeTransform {

  transform(obj: any, arg: string): any {

    // if(arg=="article_image"){
    //   return
    //
    //   //w_500
    // }

    return obj["data"]["article"]["data"]["attributes"][arg];
  }

}
