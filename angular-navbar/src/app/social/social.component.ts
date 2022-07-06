import { Component, OnInit } from '@angular/core';
import {faYoutube ,faFacebook , faGithub , faInstagram , faTwitter , faLinkedin} from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  faYoutube= faYoutube;
  faFacebook=faFacebook;
  faGithub=faGithub;
  faInstagram=faInstagram;
  faTwitter=faTwitter;
  faLinkedin=faLinkedin;
  constructor() { }

  ngOnInit(): void {
  }
 

}
