import {Pipe, PipeTransform} from '@angular/core';
import {environment} from "../../../environments/environment";

@Pipe({
  name: 'topArticlesExtract'
})
export class TopArticlesExtractPipe implements PipeTransform {


  transform(obj: any, arg: string): any {

    let url = environment.production ? "https://microwave-db.herokuapp.com":"http://localhost:1337";

    let base = obj["attributes"]
    switch (arg) {

      case "id":
        return obj["id"]
      case "slug":
        return base["slug"];

      case "article_title" :
        return base["article_title"];

      case "preamble":
        return (base["preamble"])
          .replace(/<[^>]*>/g, "")
          .substring(0, 100) + "..."

      case "main_image" :
        return base["main_image"]["data"]?.["attributes"]["url"]
    }
    console.log(JSON.stringify(base))
    return 0;
  }

}
