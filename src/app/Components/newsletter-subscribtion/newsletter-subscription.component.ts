import {Component, OnInit} from '@angular/core';
import {NewsletterSubscriptionService} from "../../Services/Newsletter/newsletter-subscription.service";

@Component({
  selector: 'newsletter-subscription',
  templateUrl: './newsletter-subscription.component.html',
  styleUrls: ['./newsletter-subscription.component.css']
})


export class NewsletterSubscriptionComponent implements OnInit {
  resultMessage: string = "";
  showResult: boolean = false;
  subscriberEmail: string = "";
  loading = false;

  constructor(private newsletterSubscriptionService: NewsletterSubscriptionService) {
  }

  ngOnInit(): void {
  }

  subscribeToNewsletter(event: any) {
    event.preventDefault();

    if (!this.validateEmail(this.subscriberEmail)){
      this.showResult = true;
      this.resultMessage = "همم.. متأكد من الإيميل؟ 👀"

    }else{

      this.loading = true;
        this.newsletterSubscriptionService.subscribeToNewsletter(this.subscriberEmail).subscribe(res => {
            this.loading = false;
          console.log("email: " + this.subscriberEmail)
          this.showResult = true;
          console.log("success: " + res.success)
          console.log("result: " + res.description)
          this.resultMessage = res.description
        },
        error => {
          this.loading = false;
          this.resultMessage = "حدث خطأ ما :("
        })
    }



    setTimeout(() => {
      this.showResult = false;
      this.resultMessage = ""
    }, 3000)
  }

  validateEmail(email:string)
  {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

}
