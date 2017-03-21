# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user = {
  username: "DemoUser",
  password: "password123"
}

claire = {
  username: "Claire",
  password: "asdfjkl;"
}

travel = {
  title: "Travel",
  author_id: 1
}

blog = {
  title: "Blog",
  author_id: 1
}

thailand = {
  title: "Thailand Itinerary",
  body: '{"entityMap":{},"blocks":[{"key":"9kdna","text":"Goals\n- create - Medium article, blog posts\n- learn - meditation, poi","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":5,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"4qtt7","text":"- feel comfortable getting around Bangkok + Chiang Mai\n- practice Thai with native speakers\n- take amazing photos\n- stay fit\n      \nNotes","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":132,"length":5,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"8vlfn","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6r06p","text":"- get SIM card w/ unlimited data\n- should cost 600bht per month\n- exchange currency at airport, ask for small bills (100bht = $3, and 20bht = 50c)\n- ATMs charge small fee 150bht - take out large amounts\n- pay for taxis w/ cash, don’t expect change, don’t ask how much + don’t accept flat rate","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"em9rm","text":"- make sure taxi meter on, should start at 35bht\n- do not use TOUTS taxis\n- available taxis on street have red light in window\n- get hotel name or directions written in Thai\n- beware gem scams\n- split up money, money belt to avoid pickpocketing\n- cover shoulders + knees in temples\n- wear longer clothes + bug spray to avoid mosquitos\n \nItinerary\n \nNov. 2\nHanover to Boston (Dartmouth Coach)\nStay @ Amy\'s\n\nNov. 3 \nBoston to Chicago (Southwest) 11:15 AM - 1:00 PM\nGymnastics @ Lakeshore","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":337,"length":9,"style":"BOLD"},{"offset":349,"length":6,"style":"UNDERLINE"},{"offset":406,"length":7,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"8qtpg","text":"Stay @ Lucy\'s\n \nNov. 4\nBrooklyn Boulders","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":16,"length":6,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"3m6kl","text":"Stay @ Lucy\'s\n  \nNov. 5\nGymnastics @ Lakeshore\nStay @ Lucy\'s\n  \nNov. 7\nPaleo Meetup\nGymnastics @ HPNC","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":17,"length":6,"style":"UNDERLINE"},{"offset":64,"length":6,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"fopcb","text":"Stay @ Lucy\'s\n  \nNov. 8-9\nChicago to Tokyo (American Airlines) 12:05 PM - 4:25 PM\nTokyo to Bankok (Japan Airlines) 5:50 PM - 11:10 PM","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":17,"length":8,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"8iv9l","text":"Stay @ Lilac Relax-Residence\n \nNov. 10","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":31,"length":7,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"ibjk","text":"Thip Samai\nStay @ Niras Bangkok Cultural Hostel\n  \nNov. 11\nJim Thompson House\nFlower Market\nWat Pho\nMeditation Class\nWat Arun\nStay @ Niras Bangkok Cultural Hostel\n  \nNov. 12\nKao San Road\nStay @ Niras Bangkok Cultural Hostel\n  \nNov. 13\nChatuchak Weekend Market\nBangkok to Ayutthaya (Train)\nStay @ 1301 Hostels\n \nNov. 14\nAncient Ayutthaya Temples\nBoat Tour","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":51,"length":7,"style":"UNDERLINE"},{"offset":166,"length":7,"style":"UNDERLINE"},{"offset":227,"length":7,"style":"UNDERLINE"},{"offset":311,"length":7,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"3nihv","text":"Loy Krathong Festival\nStay @ 1301 Hostels\n \nNov. 15\nAyutthaya to Lopburi (Train)","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":44,"length":7,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"c2edd","text":"Stay @ Nett Hotel\n  \nNov. 16\nMonkey Temple\nLopburi to Chiang Mai (Overnight Train) 8:00 PM\n \nNov. 17","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":21,"length":7,"style":"UNDERLINE"},{"offset":93,"length":7,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"ecvke","text":"Stay @ Thai Thai Hostel\n\nNov. 18\nRent Motorbikes\nGrand Canyon\nNight Bazaar\nStay @ Thai Thai Hostel\n \nNov. 19\nElephant Jungle Sanctuary\nStay @ Thai Thai Hostel\n \nNov. 20\nHike to Wat Doi Suthep\nStay @ Bunk Boutique Hostel\n\nNov. 21\nCrossFit\nStay @ Bunk Boutique Hostel\n ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":25,"length":7,"style":"UNDERLINE"},{"offset":101,"length":7,"style":"UNDERLINE"},{"offset":161,"length":7,"style":"UNDERLINE"},{"offset":221,"length":7,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"7hquj","text":"Nov. 22\nWarorot Market\nStay @ Bunk Boutique Hostel\n \nNov. 23\nCoffee w/ Phillip\nCrossFit\nStay @ Spicy Backpackers Hostel\n \nNov. 24\nStay @ Spicy Backpackers Hostel\n \nNov. 25\nCrossFit\nChiang Mai to Phayao (Bus)\nStay @ Kwan Phayao Lake House\n \nNov. 26\nKayaking\nFriendsgiving Dinner\nStay @ Kwan Phayao Lake House\n ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"UNDERLINE"},{"offset":53,"length":7,"style":"UNDERLINE"},{"offset":122,"length":7,"style":"UNDERLINE"},{"offset":164,"length":7,"style":"UNDERLINE"},{"offset":240,"length":7,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"3rpmr","text":"Nov. 27\nPhayao to Chiang Mai (Bus)\nNight Bazaar\nStay @ Le Meridien Hotel\n \nNov. 28\nCrossFit\nStay @ Thai Thai Hostel\n \nNov. 29\nDoi Inthanon National Park\nNight Bazaar\nStay @ Thai Thai Hostel\n ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"UNDERLINE"},{"offset":75,"length":7,"style":"UNDERLINE"},{"offset":118,"length":7,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"a9l9g","text":"Nov. 30\nWat Umong\nStay @ Thai Thai Hostel\n\nDec. 1\nThai Massage\nWat Suan Dok\nChat w/ Monks\nStay @ Thai Thai Hostel\n  \nDec. 2\nCrossFit\nThai Massage\nStay @ Thai Thai Hostel\n \nDec. 3","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"UNDERLINE"},{"offset":43,"length":6,"style":"UNDERLINE"},{"offset":117,"length":6,"style":"UNDERLINE"},{"offset":172,"length":6,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"94i28","text":"Chiang Mai to Bangkok (Bus) 10:00 AM - 9:00 PM\nStay @ Siam Journey Hostel\n \nDec. 4\nStay @ Siam Journey Hostel\n ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":76,"length":6,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"8q7m0","text":"Dec. 5\nWat Mahathatu\nWat Ratchanatdaram\nGolden Mount","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":6,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"dvguc","text":"Stay @ Siam Journey Hostel\n \nDec. 6\nBangkok to Phuket (Air Asia) 7:55 PM - 9:15 PM","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":29,"length":6,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"4m85o","text":"Stay @ At Night Hostel\n \nDec. 7\nPhuket to Kho Phi Phi (Boat)\nStay @ Paradise Dorm Room\n  ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":25,"length":6,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"5e0ct","text":"Dec. 8\nKho Phi Phi to Kho Lanta (Boat)\nRent Motorbike\nStay @ Fan Dee Hostel\n  \nDec. 9\nBeach\nDiamond Cliff Restaurant\nStay @ Fan Dee Hostel\n  \nDec. 10\nSkyview Farm and Slingshot Lesson\nDiamond Cliff Restaurant\nStay @ Fan Dee Hostel\n \nDec. 11\nNational Park\nWhy Not Bar and Fire Show\nStay @ Fan Dee Hostel\n \nDec. 12\n4 Island Tour\nEmerald Cave\nStay @ Fan Dee Hostel\n \nDec. 13\nStay @ Fan Dee Hostel \n\nDec. 14\nSlingshot Lesson\nStay @ Fan Dee Hostel\n \nDec. 15\nWalking Street Market\nStay @ Fan Dee Hostel","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":6,"style":"UNDERLINE"},{"offset":79,"length":6,"style":"UNDERLINE"},{"offset":142,"length":7,"style":"UNDERLINE"},{"offset":233,"length":7,"style":"UNDERLINE"},{"offset":305,"length":7,"style":"UNDERLINE"},{"offset":364,"length":7,"style":"UNDERLINE"},{"offset":396,"length":7,"style":"UNDERLINE"},{"offset":445,"length":7,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"fng10","text":"\nDec. 16\nStay @ Fan Dee Hostel\n ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":1,"length":7,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"f9vtq","text":"Dec. 17\nKho Lanta to Phi Phi (Boat)  1:30 PM","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"903jc","text":"Phi Phi to Phuket (Boat) 2:30 PM\nStay @ At Night Hostel\n \nDec. 18\nPhuket to Bangkok (Air Asia) 9:30 PM - 10:55 PM\nStay @ Siam Journey Guesthouse\n \nDec. 19","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":58,"length":7,"style":"UNDERLINE"},{"offset":147,"length":7,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"ficff","text":"Siam Square Shopping","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cih76","text":"Stay @ Siam Journey Guesthouse\n \nDec. 20\nBangkok to Hong Kong (Cathay Pacific) 8:25 AM - 12:10 PM\nHong Kong to Dallas (American) 3:45 PM - 4:00 PM\nDallas to Chicago (American) 6:10 PM - 8:45 PM\nStay @ David\'s\n  \nDec. 21\nChicago to Boston (Southwest) 2:00 PM - 5:10 PM\nBoston to Hanover (Dartmouth Coach) \n","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":33,"length":7,"style":"UNDERLINE"},{"offset":212,"length":7,"style":"UNDERLINE"}],"entityRanges":[],"data":{}}]}',
  author_id: 1,
  notebook_id: 1
}

europe = {
  title: "Europe Itinerary",
  body: '{"entityMap":{},"blocks":[{"key":"9kdna","text":"16 June Chicago to Manchester (flight) ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"2oe0h","text":"- depart O’Hare terminal 3 @ 9:55 PM","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"976l2","text":"- arrive Manchester terminal 3 @ 11:25 AM","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"en76","text":"","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a3tb7","text":"17 June Stay with Gran ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"8fkkq","text":"\n18 June Manchester to Amsterdam (flight) ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":1,"length":7,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"3bc3r","text":"- depart Manchester terminal 3 @ 11:15 AM","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f2uac","text":"- arrive Amsterdam @ 1:35 PM","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2b8cb","text":"- Amsterdam to Groningen (train) ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1dmak","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"en3si","text":"19 June See Groningen ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"7dtkf","text":"- airbnb ","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5855q","text":"","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1o5p3","text":"20 June See Groningen ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"57ulm","text":"- airbnb","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"71cmd","text":"","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"eiog8","text":"21 June Groningen to Aachen (train)  ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"4q1nr","text":"- Groningen @ 2:16 PM - Utrecht Cs @ 4:11 PM","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"76hqe","text":"- Utrecht Cs @ 5:02 PM - Koeln Hbf @ 7:12 PM","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3r92o","text":"- Koeln Hbf @ 7:43 - Aachen Hbf @ 8:16 PM","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"pq0o","text":"- NO RESERVATION","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"enqff","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a5476","text":"- A&O Hauptbahnhof Hostel","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"10p9e","text":"","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"abqtg","text":"22 June Visit Esra in Aachen ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"51b5a","text":"- A&O Hauptbahnhof Hostel","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3j1uk","text":"","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4af19","text":"23 June Aachen to Venice (train) ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"9f98r","text":"- Aachen Hbf @ 3:39 PM - Frankfurt Main Hb @ 5:30 PM","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"bfgpf","text":"- Frankfurt Main @ 6:45 PM - Muenchen Hbf @ 10:05 PM","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"55im2","text":"- Muenchen Hbf @ 11:31 PM - Venezia Mestre @ 8:21 AM","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"32vp9","text":"- PAPER TICKETS","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a9neb","text":"","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"alq32","text":"24 June See Venice ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"622s6","text":"- airbnb","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4gs8q","text":"","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6f2g9","text":"25 June See Venice ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"11jm4","text":"- airbnb","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"bke19","text":"","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"d10rp","text":"26 June Venice to Rome (train)  ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"6gqaq","text":"- Venezia Mestre @ 9:25 AM - Roma Termini @ 1:10 PM","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"c07ca","text":"- Four Seasons Hostel","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"9laqa","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"e7bn","text":"27 June See Rome ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"b5qe6","text":"- Colosseum, Roman forum, Palatino - 12 euros","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a6cqn","text":"- Four Seasons Hostel","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drl3e","text":"","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5k51j","text":"28 June See Rome ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"frmn0","text":"- Four Seasons Hostel","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fo6su","text":"","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3q4j4","text":"29 June Rome to Amsterdam (flight)  ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"ele02","text":"- depart Fiumincino terminal 3 @ 9:55 AM","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"do4ie","text":"- arrive Amsterdam terminal 3 @ 12:50 PM","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fptgo","text":"- Stayokay hostel","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"agcao","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"28d47","text":"30 June See Amsterdam ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"8bedt","text":"- hotel near airport","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"d9agc","text":"","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3i434","text":"1 July Amsterdam to Manchester (flight) ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":6,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"edrq2","text":"- depart Amsterdam @ 10:15 AM","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"63vdi","text":"- arrive Manchester terminal 3 @ 10:30 AM","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f81uh","text":"- Manchester to Chicago (flight)\n","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
  author_id: 1,
  notebook_id: 1
}

vagabonding = {
  title: "Vagabonding Notes",
  body: '{"entityMap":{},"blocks":[{"key":"9kdna","text":"America is known for it’s unhappy rich people","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ed2ch","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"e6psb","text":"It’s not about being rich, it’s about living richly ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"djk6f","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6rgtp","text":"Make work serve your interests","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ffre4","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2qks7","text":"Deliberately decide how to use the income you have ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"9l9n7","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3tlbf","text":"Time becomes the only possession - re-define the whole concept of time","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a9cv7","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4btfl","text":"What gives value to travel is fear","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"brljp","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cfnmr","text":"Prepares you to find the things you weren’t looking for","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3e7da","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3d54t","text":"We travel to exotic places to see the things we ignore at home (nature, people, history, etc.)","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"d4isi","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5oju5","text":"How to find adventure - make bold, humbly daring choices you wouldn’t usually make","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"dtt85","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3vok0","text":"Interact with people as neighbors, not as national geographic snapshots","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4dv6b","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fbuu7","text":"Ideology gets in the way of open mindedness","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6j3ke","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cjssf","text":"Give as much as you take as you travel, even if that means bringing an attitude of generosity home with you","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ctp2a","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"eji5o","text":"Learn how people think","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cdt3o","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cb1m6","text":"See (cultures, people, places) as it is now, in the present moment","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"9ppgd","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"c2lsu","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3v7mv","text":"PRACTICAL ADVISE","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8np2s","text":"- check World Travel Watch for safety reports","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"93kdf","text":"- avoid tourist traps","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ac8dr","text":"- stay away from large crowds","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a0mj9","text":"- talk to the locals","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fi1ku","text":"- patronize mom-and-pop businesses","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2i0v1","text":"- research local scams + social customs","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"9vt29","text":"- be extremely wary of offers of hospitality in conservative cultures","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"emktr","text":"- ask for restaurant recommendations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8tnui","text":"- avoid non-purified water + ice, salads + shellfish","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"dqsdv","text":"- sports + music are great ways to make friends w/ locals","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"b4t8h","text":"- brave open air food markets","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3bu8h","text":"- don\'t rely too much on guidebooks, especially for restaurants + hotels","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7tilh","text":"- ask to see a room before checking in","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7e70n","text":"- make sure taxi meter on, or agree on price before getting in (yourself + luggage)","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2v4h3","text":"- don’t put luggage in trunk","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"eth1q","text":"- be aware of going prices for things","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2dvla","text":"- how to haggle - get seller to make a second offer before you counter, stay casual + assertive","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"esrqh","text":"- fine tune your sense of humor (lack of context = humor)","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"d4mfb","text":"- watch what the locals do","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3hnrt","text":"- carry pictures of your family","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"32lr5","text":"- when you get somewhere, walk","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5gnbi","text":"- take a walking tour","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"25dh6","text":"- see the tourist sites but also wander without limits + appreciate all the small things","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8m7ih","text":"- travel in a way such that adventure finds you","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3dhff","text":"- time each week for chores + emails ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"9cbcs","text":"- plan on buying extra clothes, supplies, etc. as you need them\n","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
  author_id: 1,
  notebook_id: 1
}

blogideas = {
  title: "Blog Post Ideas",
  body: '{"entityMap":{},"blocks":[{"key":"e627g","text":"- What people in tech can learn from anthropology","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"53gu3","text":"- Effective Altruism","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1d08","text":"- Flow","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2e7bp","text":"- Being a woman in tech","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"c0am9","text":"- Art of Learning","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5klmn","text":"- Group workout ideas","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"mg36","text":"- Slingshot practice in Thailand","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"uvo9","text":"- Meditation","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2h3bt","text":"- Music (workout/work playlists, etc.)","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a8gbg","text":"- Our whole culture has an eating disorder","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cgi35","text":"- War of Art (when you\'re afraid of doing something, that\'s when you know you\'re on the right path)","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
  author_id: 1,
  notebook_id: 2
}

edit = {
  name: "ToDo",
  author_id: 1
}

read = {
  name: "ToRead",
  author_id: 1
}

User.create!(demo_user);
User.create!(claire);

Notebook.create!(travel);
Notebook.create!(blog);

Note.create!(thailand);
Note.create!(europe);
Note.create!(vagabonding);

Note.create!(blogideas);

Tag.create!(edit);
Tag.create!(read);
