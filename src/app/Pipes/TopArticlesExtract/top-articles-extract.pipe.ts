import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'topArticlesExtract'
})
export class TopArticlesExtractPipe implements PipeTransform {

  transform(obj: any, arg: string): any {


    let base = obj["attributes"]
    switch (arg) {

      case "id":
        return obj["id"]
      case "slug":
        return base["slug"];

      case "article_title" :
        return base["article_title"];

      case "article_body":
        return (base["article_body"])
          .replace(/<[^>]*>/g, "")
          .substring(0, 100) + "..."

      case "main_image" :
        return "https://microwave-db.herokuapp.com" + base["main_image"]["data"]?.["attributes"]["url"]
    }
    console.log(JSON.stringify(base))
    return 0;
  }

}
