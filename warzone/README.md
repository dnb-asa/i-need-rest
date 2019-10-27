# Warzone ⚔️

A king of the hill-inspired game where all actions are done by HTTP requests.

## Goal 🥅

Be on the top of the leaderboards once the game is over. The score is calculated by the amount of kills you have.

## Rules 📝

Each player starts out with 100 health, and can request 10 coins. These coins can be used to buy different types of resources, like ammo for a pistol. When a player is killed, the shooter gets all of the remaining coins from the dead player. A dead player can request to be revived, but will only receive 5 coins to start with. These are the constants we use in the game:

### `/prices` 🤑

-   `Ammo: 1 coin`
-   `Rocket: 2 coins`
-   `Bandage: 1 coin`
-   `Armor: 1 coin`

### `/coins` 💰

-   `Initial coins: 10`
-   `Revival coins: 5`

### `/pistol` 🔫

-   `Pistol damage: 10`
-   `Pistol hit chance: 100%`

### `/bazooka` 💣

-   `Bazooka damage: 35`
-   `Bazooka hit chance: 50%`

### `/armor` 🛡

-   `Armor: absorbs 75% of the damage`

### `/bandages`

-   `Bandage heal: 15 health`

## Items 🍱

---

### Pistol

🔫 Pew pew pew 🔫

A low-cost but powerful weapon. With a hit-chance of 100%, there's no need to worry about missing your target. With ammunition readily available at the `/pistol` endpoint, there's no safer way to crush your enemies! Just make sure you've got enough coins to spend.

-   `cost: 1 coin`
-   `damage: 15 hp`
-   `hit chance: 100%`

---

#### Bandages

⛑ Man down! Medic! ⛑

Patch yourself up with some bandages, at the low cost of 1 coin a piece! A bandage will restore your health with +15, which means you can easily patch those bullet wounds. However, it won't be enough for a bazooka. How evil are your enemies?

-   `cost: 1 coin`
-   `heal: 15 hp`

---

#### Armor

🛡Whoo-ooo-ooo-sh🛡

A thick plate of heavy duty armor can handle even the toughest of weapons. Equip yourself with armor to deflect 75% of the incoming damage! Armor are one-time use only, and will only deflect one shot. Perfect for those bazooka-fueled sessions.

-   `cost: 1 coin`
-   `damage reduction: 75%`

---

#### Bazooka

💥 BOOOOM 💥

What other ways to go out than with a **BANG**? A bazooka will sure do the damage you wish upon your enemies, but at a risk. Each shot has a 50% change of hitting your target, and a 50% chance of failing and damaging yourself! Every winner will have to take some calculated risks.

-   `cost: 2 coins`
-   `damage: 35 hp`
-   `hit chance: 50%`

---

## Actions 👊

---

### Revive

🚑 Wee-woo wee-woo wee-woo 🚑

We've all been there, down bad. Get back up with a simple request, and receive 5 coins to get back in the game!

-   `coins: 5`

---

### Shoot

😈 Time for competition 😈

Whether you've invested in rockets for you bazooka or ammo for your pistol, you need to fire your shots to get the kills necessary to win! A simple POST-request to either `/pistol` or `/bazooka` will do. Remember to select your target wisely.

---

### Investigate

🕵️‍♂️ You know my methods, Watson.. 🕵️‍♀️

Ready to pick your target? GET the entire list of players from the `/players` endpoint, and make them pay! No token needed 🔓
