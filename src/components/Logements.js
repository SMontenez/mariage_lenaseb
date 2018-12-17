import React from 'react';

const Logements = () => (
  <div className="content">
    <h1>Logements</h1>
    <div className="block">
      <div className="text">
        Pour vous loger, plusieurs options sont possibles:
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.airbnb.fr/s/372-Rue-de-la-Taill%C3%A9e--%C3%89chir%C3%A9--France/homes?refinement_paths%5B%5D=%2Fhomes&query=372%20Rue%20de%20la%20Taill%C3%A9e%2C%20%C3%89chir%C3%A9%2C%20France&allow_override%5B%5D=&checkin=2019-08-17&checkout=2019-08-18&zoom=13&search_by_map=true&sw_lat=46.33766999511728&sw_lng=-0.5049505503274899&ne_lat=46.440448939147664&ne_lng=-0.26980781406772125&s_tag=aexNWYbc"
            >
              Airbnb
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.booking.com/searchresults.en-gb.html?aid=397594&label=gog235jc-1BCAEoggI46AdIM1gDaE2IAQGYAQm4ARnIAQ_YAQHoAQGIAgGoAgM&lang=en-gb&sid=7d2a3dac16bdfd15550959d38b22a011&sb=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.en-gb.html%3Faid%3D397594%3Blabel%3Dgog235jc-1BCAEoggI46AdIM1gDaE2IAQGYAQm4ARnIAQ_YAQHoAQGIAgGoAgM%3Bsid%3D7d2a3dac16bdfd15550959d38b22a011%3Bsb_price_type%3Dtotal%26%3B&ss=%C3%89chir%C3%A9%2C+Poitou-Charentes%2C+France&is_ski_area=&checkin_monthday=17&checkin_month=8&checkin_year=2019&checkout_monthday=18&checkout_month=8&checkout_year=2019&no_rooms=1&group_adults=2&group_children=0&b_h4u_keep_filters=&from_sf=1&ss_raw=%C3%A9chir%C3%A9&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=-1424857&dest_type=city&place_id_lat=46.383301&place_id_lon=-0.4&search_pageview_id=2a759d8c9f5000f6&search_selected=true&search_pageview_id=2a759d8c9f5000f6&ac_suggestion_list_length=3&ac_suggestion_theme_list_length=0#map_closed"
            >
              Un hôtel
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.gites-de-france.com/fr/search?destination=%C3%89chir%C3%A9&towns=66531&travelers=2&arrival=2019-08-17&departure=2019-08-18"
            >
              Une chambre d&#39;hôte ou gite
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.campingfrance.com/recherchez-votre-camping/nouvelle-aquitaine/deux-sevres/echire"
            >
              Un camping
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Logements;
