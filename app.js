// 1a
const elf = {
    title: `Elf`,
    main: `Buddy`,

    // 1b
    quote: function(){
      return `The best way to spread Christmas cheer is singing loud for all to hear`;
    },
    
    // 1c
    info: function(){
      return `${this.title} is about ${this.main}`;
      // Or
      // return this.title + ' is about ' + this.main;
    }
  };
  console.log(elf);


  // 2a
  const muppetXmas = {
    title: `The Muppet Christmas Carol`,
    main: `Ebenezer Scrooge`,

    // 2b
    quote: function(){
      return `Wherever you find love it feels like Christmas`;
    },

    // 2c
    info: function(){
      return `${this.title} is about ${this.main}`;
    }
  }

  console.log(muppetXmas);


  // 3a
  function XmasMovie(title, main){
    this.title = title;
    this.main = main;
  }

  // 3b
  XmasMovie.prototype.info = function(){
    return `${this.title} is about ${this.main}`;
  }

  // 3c
  const elf1 = new XmasMovie(`Elf`, `Buddy`);
  console.log(elf1);
  console.log(elf1.info());

  // 3d
  const muppetXmas1 = new XmasMovie(
    `The Muppet Christmas Carol`,
    `Ebenezer Scrooge`
    );
  console.log(muppetXmas1);
  console.log(muppetXmas1.info());

  // 4a
  class CM {
    constructor(title, main){
      this.title = title;
      this.main = main;
    }

    // 4b
    info(){
      return `${this.title} is about ${this.main}`;
    }

    // 4e
    static loveXmas(){
      return `I Love Christmas!`;
    }
  }

  // 4c

  const elf2 = new CM(`Elf`, `Buddy`);
  console.log(elf2);
  console.log(elf2.info());

  // 4d

  const muppetXmas2 = new CM(
    `The Muppet Christmas Carol`,
    `Ebenezer Scrooge`
    );

  console.log(muppetXmas2);
  console.log(muppetXmas2.info());


  // 4f

  console.log(CM.loveXmas());
  