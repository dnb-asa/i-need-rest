# Wariozone ⚔️

A king of the hill-inspired game where all actions are done by HTTP requests.

## Documentation

[https://wariozone.web.app/spec](https://wariozone.web.app/spec)

## Goal 🥅

Be on the top of the leaderboards once the game is over. The score is calculated by the amount of eliminations you have.

## Rules 📝

Each player starts out with 100 health, and can request an initial amount of 10 coins. These coins can be used to buy different types of resources, like shells to throw at other players. When a player is eliminated, the thrower gets half of the remaining coins from the eliminated player. The eliminated player keeps the other half. An eliminated player can request to be "oneup'ed", but will lose all other resources. These are the constants we use in the game:

### `/prices` 🤑

-   `Shell: 1 coin`
-   `Boomerand: 2 coins`
-   `Mushroom: 1 coin`
-   `Star: 1 coin`

### `/coins` 🪙

-   `Initial coins: 10`
-   `Subsequent coins: 1`

### `/shell` 🐢

-   `Shell damage: 10`
-   `Shell hit chance: 100%`

### `/boomerang` 🪃

-   `Boomerang damage: 35`
-   `Boomerang hit chance: 50%`

### `/star` ⭐️

-   `Star: absorbs 75% of the damage`

### `/mushroom` 🍄

-   `Mushroom heal: 15 health`

## Items 🍱

---

### Coins

🪙 Ka-ching! 🪙

To buy resources you need coins. Coins are available at the `/coins` endpoint. At the first request you receive 10 coins. After the first request 1 coin is rewarded at each request, but only every 10 seconds. If you have 0 coins you do not need to wait. 

### Shell

A low-cost but powerful attack. With a hit-chance of 100%, there's no need to worry about missing your target. With shells readily available at the `/shell` endpoint, there's no safer way to wack your nemeses! Just make sure you've got enough coins to spend.

-   `cost: 1 coin`
-   `damage: 10 hp`
-   `hit chance: 100%`

Methods

* Buy - `GET /shell`
* Use - `POST /shell`

---

#### Mushrooms

🍄 Wa-auch! 🍄

Refresh yourself with some mushroom, at the low cost of 1 coin a piece! You will need to purchase mushrooms before using them. A mushroom will restore your health with +15, which means you can easily patch those shell-shaped bruises. However, it won't be enough for a boomerang. What will your nemeses do?

-   `cost: 1 coin`
-   `heal: 15 hp`

Methods:

* Buy - `GET /mushroom`
* Use - `POST /mushroom`

---

#### Star

⭐️ ne-ne-ne-ne-ne... you get the drift ⭐️

A trusty star can handle even the toughest of attacks. Equip yourself with a star to deflect 75% of the incoming damage! Star are one-time use only, and will only deflect one shot. Perfect for those boomerang-fueled sessions.

-   `cost: 1 coin`
-   `damage reduction: 75%`

Methods:

* Buy - `GET /star`

---

#### Boomerang

🪃 SWoooOOOSH 🪃

What better ways to go out than with a **SWOOSH**? A boomerang will sure do the damage you wish upon your nemeses, but at a risk. The boomerang has a 50% chance of hitting your target, and a 50% chance of coming right back in you face! Every winner will have to take some calculated risks.

-   `cost: 2 coins`
-   `damage: 35 hp`
-   `hit chance: 50%`

Methods:

* Buy - `GET /boomerang`
* Shoot - `POST /boomerang`

---

## Actions 👊

---

### One-up

🚑 Wee-woo wee-woo wee-woo 🚑

We've all been there, down bad. Get back up with a simple POST request to `/oneup`, but your resources are gone. 

Methods:

* One-up - `POST /oneup`

---

### Attack

😈 Time for competition 😈

Whether you've invested in boomerangs or shells, you need to fire your shots to get the kills necessary to win! A simple POST-request to either `/shell` or `/boomerang` will do. Remember to select your target wisely.

Methods:

* Pistol - `POST /shell`
* Boomerang - `POST /boomerang`

---

### Investigate

🕵️‍♂️ You know my methods, Watson.. 🕵️‍♀️

Ready to pick your target? GET the entire list of players from the `/players` endpoint, and make them pay! No token needed.

Methods:

* Get players - `GET /players`