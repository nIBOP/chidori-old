import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements DoCheck {
  titles=['Госпожа Кагуя: в любви как на войне 3 / Kaguya-sama wa Kokurasetai: Ultra Romantic','Царство 4 / Kingdom 4th Season','У Коми проблемы с общением 2 / Komi-san wa, Comyushou desu. 2nd Season','Власть книжного червя 3','Игра друзей / Tomodachi Game']
  images=['https://desu.shikimori.one/system/animes/original/43608.jpg?1654026489','https://nyaa.shikimori.one/system/animes/original/50160.jpg?1654026167','https://kawai.shikimori.one/system/animes/original/50631.jpg?1653339437','https://dere.shikimori.one/system/animes/original/42429.jpg?1651771492','https://desu.shikimori.one/system/animes/original/50273.jpg?1652971342']
  hrefs=['https://shikimori.one/animes/43608-kaguya-sama-wa-kokurasetai-ultra-romantic','https://shikimori.one/animes/50160-kingdom-4th-season','https://shikimori.one/animes/50631-komi-san-wa-comyushou-desu-2nd-season','https://shikimori.one/animes/42429-honzuki-no-gekokujou-shisho-ni-naru-tame-ni-wa-shudan-wo-erandeiraremasen-3rd-season','https://shikimori.one/animes/50273-tomodachi-game']
  k1 = -1
  k2 = -1
  ngDoCheck(): void {
    this.k1 = -1;
    this.k2 = -1;
  }
  getImage() {
    this.k1++
    return this.images[this.k1]
  }
  getHref() {
    this.k2++
    return this.hrefs[this.k2]
  }


}
