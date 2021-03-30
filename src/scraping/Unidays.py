import requests
from bs4 import BeautifulSoup
import json

URL = 'https://www.myunidays.com/FR/fr-FR/list/all/AtoZ'
page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')

containerToutesPromos = soup.find(id='Page_List_all_AtoZ')

divToutesPromos = containerToutesPromos.find('div', 'tile__group')

promos = divToutesPromos.find_all('article', 'tile')

f = open("UnidaysPromoScrap.txt", "w+")


data = {}
data['promotionsUnidays'] = []

for promo in promos:
    promoNom = promo['data-customer-name']
    promoRabais = promo.find('p', class_='tile__discount')
    if None in (promoNom, promoRabais):
        continue
    data['promotionsUnidays'].append({
        'marque': promoNom,
        'rabais': promoRabais.text.strip()
    })

with open('promotionsUnidays.json', 'w') as outfile:
    json.dump(data, outfile)

f.close()