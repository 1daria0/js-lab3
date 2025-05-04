// Шаг 1. Создание класса Item
class Item {
  /**
   * Создает объект Item
   * @param {string} name - Название предмета
   * @param {number} weight - Вес предмета
   * @param {string} rarity - Редкость предмета (common, uncommon, rare, legendary)
   */
  constructor(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;
  }

  /**
   * Получить информацию о предмете
   * @returns {string} Информация о предмете
   */
  getInfo() {
    return `Item: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
  }

  /**
   * Изменяет вес предмета
   * @param {number} newWeight - Новый вес предмета
   */
  setWeight(newWeight) {
    this.weight = newWeight;
  }
}

// Шаг 2. Создание класса Weapon
class Weapon extends Item {
  /**
   * Создает объект Weapon
   * @param {string} name - Название оружия
   * @param {number} weight - Вес оружия
   * @param {string} rarity - Редкость оружия
   * @param {number} damage - Урон оружия
   * @param {number} durability - Прочность оружия (от 0 до 100)
   */
  constructor(name, weight, rarity, damage, durability) {
    super(name, weight, rarity);
    this.damage = damage;
    this.durability = durability;
  }

  /**
   * Использовать оружие (уменьшить прочность)
   */
  use() {
    if (this.durability > 0) {
      this.durability -= 10;
    }
  }

  /**
   * Починить оружие (восстановить прочность)
   */
  repair() {
    this.durability = 100;
  }

  /**
   * Получить информацию о оружии
   * @returns {string} Информация о оружии
   */
  getInfo() {
    return `${super.getInfo()}, Damage: ${this.damage}, Durability: ${this.durability}`;
  }
}

// Шаг 3. Тестирование

// Создание объектов классов
const sword = new Item("Steel Sword", 3.5, "rare");
console.log(sword.getInfo());
sword.setWeight(4.0);
console.log(sword.getInfo());

const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
console.log(bow.getInfo());
bow.use();
console.log(bow.durability); // должно уменьшиться
bow.repair();
console.log(bow.durability); // восстановлено до 100
