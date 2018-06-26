import { component, componentWithBlueprint } from "ivx";
import { footer, div, h2, table, tbody, tr, td, ul, li, h3, a, i, b, img, span, button } from "ivx-html";

const FOOTER = footer("gh-w", { id: "glbfooter", role: "contentinfo" }).c(
  div().c(
    div("", { id: "rtm_html_1650" }).c([
      div("", { id: "rtm_html_1651" }),
      h2("gh-ar-hdn").c("Additional site navigation"),
      div("gffoot", { id: "gf-BIG" }).c(
        table("gf-t").c(
          tbody().c(
            tr().c([
              td().c(
                ul().c([
                  li("gf-li").c(
                    h3("gf-bttl").c(
                      a("gf-bttl thrd", {
                        href: "http://www.ebay.com/sch/allcategories/all-categories",
                        _sp: "m571.l3601",
                      }).c("Buy"),
                    ),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://pages.ebay.com/help/account/registration.html",
                      _sp: "m571.l2895",
                    }).c("Registration"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://pages.ebay.com/ebay-money-back-guarantee/",
                      _sp: "m571.l4539",
                    }).c("eBay Money Back Guarantee"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://pages.ebay.com/help/buy/basics.html",
                      _sp: "m571.l2897",
                    }).c("Bidding & buying help"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://stores.ebay.com",
                      _sp: "m571.l2899",
                    }).c("Stores"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://www.ebay.com/local",
                      _sp: "m571.l3221",
                    }).c("eBay Local"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://www.ebay.com/gds",
                      _sp: "m571.l5360",
                    }).c("eBay guides"),
                  ),
                ]),
              ),
              td().c(
                ul().c([
                  li("gf-li").c(
                    h3("gf-bttl").c(
                      a("gf-bttl thrd", {
                        href: "http://www.ebay.com/sl/sell",
                        _sp: "m571.l2903",
                      }).c("Sell"),
                    ),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://www.ebay.com/sl/sell",
                      _sp: "m571.l2904",
                    }).c("Start selling"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://pages.ebay.com/sellerinformation/howtosell/sellingbasics.html",
                      _sp: "m571.l2905",
                    }).c("Learn to sell"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://pages.ebay.com/sellerinformation/ebayforbusiness/essentials.html",
                      _sp: "m571.l2906",
                    }).c("Business sellers"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "https://www.ebaypartnernetwork.com/files/hub/en-US/index.html",
                      _exsp: "m571.l2921",
                    }).c("Affiliates"),
                  ),
                  li("gf-li").c(
                    h3("gf-bttl").c("Tools & apps"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://anywhere.ebay.com/mobile/",
                      _sp: "m571.l2944",
                    }).c("Mobile apps"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://anywhere.ebay.com",
                      _exsp: "m571.l2923",
                    }).c("Downloads"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://developer.ebay.com",
                      _exsp: "m571.l2924",
                    }).c("Developers"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://pages.ebay.com/securitycenter/index.html",
                      _sp: "m571.l2907",
                    }).c("Security center"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://viv.ebay.com/ws/eBayISAPI.dll?EbayTime",
                      _sp: "m571.l2908",
                    }).c("eBay official time"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://pages.ebay.com/sitemap.html",
                      _sp: "m571.l2909",
                    }).c("Site map"),
                  ),
                ]),
              ),
              td().c([
                ul().c([
                  li("gf-li").c(
                    h3("gf-bttl").c("eBay companies"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://www.ebayclassifiedsgroup.com/",
                      _exsp: "m571.l2927",
                    }).c("eBay Classifieds"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://www.stubhub.com",
                      _exsp: "m571.l3208",
                    }).c("StubHub"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "https://www.close5.com",
                      _exsp: "m571.l3360",
                    }).c("Close5"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "https://www.ebayinc.com/our-company/our-other-businesses/",
                      _exsp: "m571.l2931",
                    }).c("See all companies"),
                  ),
                  li("gf-li").c(
                    h3("gf-bttl").c("Stay connected"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://www.ebay.com/stories/",
                      _sp: "m571.l2940",
                    }).c("eBay's Blogs"),
                  ),
                  li("gf-li").c([
                    a("thrd gf-i", {
                      href: "https://www.facebook.com/eBay",
                      _exsp: "m571.l2942",
                    }).c(i("gspr icfbg").c("Facebook")),
                    i("gspr icfbg"),
                  ]),
                  i("gspr icfbg").c([
                    li("gf-li").c([
                      a("thrd gf-i", {
                        href: "http://twitter.com/#!/eBay",
                        _exsp: "m571.l2943",
                      }).c(i("gspr ictwg").c("Twitter")),
                      i("gspr ictwg"),
                    ]),
                    i("gspr ictwg").c([
                      li("gf-li").c([
                        a("thrd gf-i", {
                          href: "https://plus.google.com/+eBay/posts",
                          _exsp: "m571.l3223",
                        }).c(i("gspr icgpg").c("Google+")),
                        i("gspr icgpg"),
                      ]),
                      i("gspr icgpg"),
                    ]),
                  ]),
                ]),
                i("gspr icfbg").c(
                  i("gspr ictwg").c(i("gspr icgpg")),
                ),
              ]),
              td().c(
                ul().c([
                  li("gf-li").c(
                    h3("gf-bttl").c(
                      a("gf-bttl thrd", {
                        href: "http://www.ebayinc.com",
                        _exsp: "m571.l2932",
                      }).c("About eBay"),
                    ),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "https://www.ebayinc.com/our-company/",
                      _exsp: "m571.l2933",
                    }).c("Company info"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "https://www.ebayinc.com/stories/news/",
                      _exsp: "m571.l2934",
                    }).c("News"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "https://investors.ebayinc.com",
                      _exsp: "m571.l3269",
                    }).c("Investors"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "https://careers.ebayinc.com/",
                      _exsp: "m571.l2937",
                    }).c("Careers"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://www.ebaymainstreet.com",
                      _exsp: "m571.l2936",
                    }).c("Government relations"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://cc.ebay.com",
                      _exsp: "m571.l2938",
                    }).c("Advertise with us"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://pages.ebay.com/help/policies/overview.html",
                      _sp: "m571.l2910",
                    }).c("Policies"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://pages.ebay.com/help/policies/programs-vero-ov.html",
                      _sp: "m571.l3418",
                    }).c("Verified Rights Owner (VeRO) Program"),
                  ),
                  li("gf-li").c(
                    a("thrd gh-survey", {
                      href: "http://qu.ebay.com/survey?srvName=globalheader+%28footer-US%29",
                      title: "opens in a new window or tab",
                    }).c("Tell us what you think"),
                  ),
                ]),
              ),
              td().c(
                ul().c([
                  li("gf-li").c(
                    h3("gf-bttl").c(
                      a("gf-bttl thrd", {
                        href: "http://ocs.ebay.com/ws/eBayISAPI.dll?CustomerSupport",
                        _sp: "m571.l1545",
                      }).c("Help & Contact"),
                    ),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://resolutioncenter.ebay.com/",
                      _sp: "m571.l1619",
                    }).c("Resolution Center"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://pages.ebay.com/sellerinformation/index.html",
                      _sp: "m571.l1613",
                    }).c("Seller Information Center"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://ocsnext.ebay.com/ocs/cuhome",
                      _sp: "m571.l2911",
                    }).c("Contact us"),
                  ),
                  li("gf-li").c(
                    h3("gf-bttl").c(
                      a("gf-bttl thrd", {
                        href: "http://community.ebay.com",
                        _sp: "m571.l2912",
                      }).c("Community"),
                    ),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://announcements.ebay.com",
                      _sp: "m571.l2913",
                    }).c("Announcements"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://pages.ebay.com/community/answercenter/index.html",
                      _sp: "m571.l2914",
                    }).c("Answer center"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://forums.ebay.com",
                      _exsp: "m571.l2939",
                    }).c("Discussion boards"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://givingworks.ebay.com",
                      _exsp: "m571.l3271",
                    }).c("eBay Giving Works"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://givingworks.ebay.com/browse/celebrities",
                      _exsp: "m571.l3272",
                    }).c("eBay Celebrity"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://groups.ebay.com/groups/EbayGroups/1?redirected=1",
                      _exsp: "m571.l2941",
                    }).c("Groups"),
                  ),
                  li("gf-li").c(
                    a("thrd", {
                      href: "http://www.ebay.com/ets/eBayTopShared",
                      _sp: "m571.l2916",
                    }).c("eBay top shared"),
                  ),
                  li("gf-li").c(
                    h3("gf-bttl").c("eBay Sites"),
                  ),
                  li("gf-li").c(
                    div("gf-flags-wpr").c([
                      a("thrd", {
                        "aria-expanded": "false",
                        "aria-controls": "gf-f",
                        role: "button",
                        title: "eBay country sites",
                        _sp: "m571.l2586",
                        href: "http://www.ebay.com",
                        id: "gf-fbtn",
                      }).c([
                        "United States",
                        b("gf-if gspr flus"),
                        " ",
                        b("gh-sprRetina", { id: "gf-fbtn-arr" }),
                      ]),
                      div("", { id: "gf-f" }).c(
                        ul("gf-ful", { role: "navigation" }).c([
                          li("gf-f-li0").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.com.au",
                              title: "eBay Australia",
                            }).c([b("flau gf-if gspr"), "Australia"]),
                          ),
                          li("gf-f-li0").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.at",
                              title: "eBay Austria",
                            }).c([b("flat gf-if gspr"), "Austria"]),
                          ),
                          li("gf-f-li0").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.be",
                              title: "eBay Belgium",
                            }).c([b("flbe gf-if gspr"), "Belgium"]),
                          ),
                          li("gf-f-li0").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.ca",
                              title: "eBay Canada",
                            }).c([b("flca gf-if gspr"), "Canada"]),
                          ),
                          li("gf-f-li0").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.cn",
                              title: "eBay China",
                            }).c([b("flcn gf-if gspr"), "China"]),
                          ),
                          li("gf-f-li0").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.fr",
                              title: "eBay France",
                            }).c([b("flfr gf-if gspr"), "France"]),
                          ),
                          li("gf-f-li0").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.de",
                              title: "eBay Germany",
                            }).c([b("flde gf-if gspr"), "Germany"]),
                          ),
                          li("gf-f-li1 gf-f-li-top").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.com.hk",
                              title: "eBay Hong Kong",
                            }).c([b("flhk gf-if gspr"), "Hong Kong"]),
                          ),
                          li("gf-f-li1").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.in",
                              title: "eBay India",
                            }).c([b("flin gf-if gspr"), "India"]),
                          ),
                          li("gf-f-li1").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.ie",
                              title: "eBay Ireland",
                            }).c([b("flie gf-if gspr"), "Ireland"]),
                          ),
                          li("gf-f-li1").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.it",
                              title: "eBay Italy",
                            }).c([b("flit gf-if gspr"), "Italy"]),
                          ),
                          li("gf-f-li1").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.co.jp",
                              title: "eBay Japan",
                            }).c([b("fljp gf-if gspr"), "Japan"]),
                          ),
                          li("gf-f-li1").c(
                            a("gf-if-a", {
                              href: "http://global.gmarket.co.kr/Home/Main",
                              title: "eBay Korea",
                            }).c([b("flkr gf-if gspr"), "Korea"]),
                          ),
                          li("gf-f-li1").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.com.my",
                              title: "eBay Malaysia",
                            }).c([b("flmy gf-if gspr"), "Malaysia"]),
                          ),
                          li("gf-f-li2 gf-f-li-top").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.nl",
                              title: "eBay Netherlands",
                            }).c([b("flnl gf-if gspr"), "Netherlands"]),
                          ),
                          li("gf-f-li2").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.ph",
                              title: "eBay Philippines",
                            }).c([b("flph gf-if gspr"), "Philippines"]),
                          ),
                          li("gf-f-li2").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.pl",
                              title: "eBay Poland",
                            }).c([b("flpl gf-if gspr"), "Poland"]),
                          ),
                          li("gf-f-li2").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.com.sg",
                              title: "eBay Singapore",
                            }).c([b("flsg gf-if gspr"), "Singapore"]),
                          ),
                          li("gf-f-li2").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.es",
                              title: "eBay Spain",
                            }).c([b("fles gf-if gspr"), "Spain"]),
                          ),
                          li("gf-f-li2").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.se",
                              title: "eBay Sweden",
                            }).c([b("flse gf-if gspr"), "Sweden"]),
                          ),
                          li("gf-f-li2").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.ch",
                              title: "eBay Switzerland",
                            }).c([b("flch gf-if gspr"), "Switzerland"]),
                          ),
                          li("gf-f-li3 gf-f-li-top").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.com.tw",
                              title: "eBay Taiwan",
                            }).c([b("fltw gf-if gspr"), "Taiwan"]),
                          ),
                          li("gf-f-li3").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.co.th",
                              title: "eBay Thailand",
                            }).c([b("flth gf-if gspr"), "Thailand"]),
                          ),
                          li("gf-f-li3").c(
                            a("gf-if-a", {
                              href: "http://www.gittigidiyor.com",
                              title: "eBay Turkey",
                            }).c([b("fltr gf-if gspr"), "Turkey"]),
                          ),
                          li("gf-f-li3").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.co.uk",
                              title: "eBay United Kingdom",
                            }).c([b("flgb gf-if gspr"), "United Kingdom"]),
                          ),
                          li("gf-f-li3").c(
                            a("gf-if-a", {
                              href: "http://www.ebay.vn",
                              title: "eBay Vietnam",
                            }).c([b("flvn gf-if gspr"), "Vietnam"]),
                          ),
                        ]),
                      ),
                    ]),
                  ),
                ]),
              ),
            ]),
          ),
        ),
      ),
      div("", { id: "gf-t-box" }).c(
        table("gf-t").c(
          tbody().c([
            tr().c(
              td("", { colSpan: 2 }).c(
                ul("gf-lb", { id: "gf-l" }).c([
                  li("gf-li").c(
                    a("thrd gf-bar-a", {
                      href: "http://www.ebayinc.com",
                      _exsp: "m571.l2602",
                    }).c("About eBay"),
                  ),
                  li("gf-li").c(
                    a("thrd gf-bar-a", {
                      href: "http://announcements.ebay.com",
                      _exsp: "m571.l2935",
                    }).c("Announcements"),
                  ),
                  li("gf-li").c(
                    a("thrd gf-bar-a", {
                      href: "http://community.ebay.com",
                      _exsp: "m571.l1540",
                    }).c("Community"),
                  ),
                  li("gf-li").c(
                    a("thrd gf-bar-a", {
                      href: "http://pages.ebay.com/securitycenter/index.html",
                      _exsp: "m571.l2616",
                    }).c("Security Center"),
                  ),
                  li("gf-li").c(
                    a("thrd gf-bar-a", {
                      href: "http://resolutioncenter.ebay.com/",
                      _sp: "m571.l1619",
                    }).c("Resolution Center"),
                  ),
                  li("gf-li").c(
                    a("thrd gf-bar-a", {
                      href: "http://pages.ebay.com/sellerinformation/index.html",
                      _exsp: "m571.l1613",
                    }).c("Seller Information Center"),
                  ),
                  li("gf-li").c(
                    a("thrd gf-bar-a", {
                      href: "http://pages.ebay.com/help/policies/overview.html",
                      _exsp: "m571.l2604",
                    }).c("Policies"),
                  ),
                  li("gf-li").c(
                    a("thrd gf-bar-a", {
                      href: "https://www.ebaypartnernetwork.com/files/hub/en-US/index.html",
                      _exsp: "m571.l3947",
                    }).c("Affiliates"),
                  ),
                  li("gf-li").c(
                    a("thrd gf-bar-a", {
                      href: "http://ocs.ebay.com/ws/eBayISAPI.dll?CustomerSupport",
                      _sp: "m571.l1545",
                    }).c("Help & Contact"),
                  ),
                  li("gf-li").c(
                    a("thrd gf-bar-a", {
                      href: "http://pages.ebay.com/sitemap.html",
                      _exsp: "m571.l2909",
                    }).c("Site Map"),
                  ),
                ]),
              ),
            ),
            tr("", { valign: "top" }).c(
              td("gf-legal").c([
                "Copyright © 1995-2016 eBay Inc. All Rights Reserved.",
                a("", {
                  href: "http://pages.ebay.com/help/policies/user-agreement.html",
                }).c("User Agreement"),
                ",",
                a("", {
                  href: "http://pages.ebay.com/help/policies/privacy-policy.html",
                }).c("Privacy"),
                ",",
                a("", {
                  href: "http://pages.ebay.com/help/account/cookies-web-beacons.html",
                }).c("Cookies"),
                "and",
                a("", {
                  href: "http://cgi6.ebay.com/ws/eBayISAPI.dll?AdChoiceLandingPage&partner=0",
                  id: "gf-AdChoice",
                }).c("AdChoice"),
              ]),
            ),
          ]),
        ),
      ),
    ]),
  ),
);

const BUY_NOW_ATTRS = { type: "button" };

const SearchResultsItem = component((item: any) => {
  return div("search-results-item").c([
    h2().c(item.title),
    div("lvpic pic img left").c(
      div("lvpicinner full-width picW").c(
        a("img imgWr2", { href: `/buy/${item.id}` }).c(
          img("", { src: item.image, alt: item.title }),
        ),
      ),
    ),
    span("price").c(item.price),
    button("buy-now", BUY_NOW_ATTRS).c("Buy now!"),
  ]);
});

const SearchResultsItemPrerendered = componentWithBlueprint(SearchResultsItem({
  "id": 0,
  "title": "",
  "price": "",
  "image": "",
}));

export const MarkoSearchApp = component<{ items: any[] }>((searchResults) => {
  return div("search-results").c([
    div().c(searchResults.items.map((item) => SearchResultsItemPrerendered(item))),
    FOOTER,
  ]);
});
