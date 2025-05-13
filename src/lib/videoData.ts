
export interface GhibliVideo {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  year: number;
  duration: string;
  categories: string[];
  director: string;
  rating: string;
}

export const ghibliVideos: GhibliVideo[] = [
  {
    id: 1,
    title: "My Neighbor Totoro",
    description: "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
    thumbnail: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/92a7Hj0ijLs",
    year: 1988,
    duration: "1h 26m",
    categories: ["fantasy", "family", "adventure"],
    director: "Hayao Miyazaki",
    rating: "G"
  },
  {
    id: 2,
    title: "Spirited Away",
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
    thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/ByXuk9QqQkk",
    year: 2001,
    duration: "2h 5m",
    categories: ["fantasy", "adventure", "family"],
    director: "Hayao Miyazaki",
    rating: "PG"
  },
  {
    id: 3,
    title: "Princess Mononoke",
    description: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony.",
    thumbnail: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/4OiMOHRDs14",
    year: 1997,
    duration: "2h 14m",
    categories: ["fantasy", "adventure", "action"],
    director: "Hayao Miyazaki",
    rating: "PG-13"
  },
  {
    id: 4,
    title: "Howl's Moving Castle",
    description: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/iwROgK94zcM",
    year: 2004,
    duration: "1h 59m",
    categories: ["fantasy", "adventure", "romance"],
    director: "Hayao Miyazaki",
    rating: "PG"
  },
  {
    id: 5,
    title: "Ponyo",
    description: "A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him.",
    thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/CsR3KVgBzSM",
    year: 2008,
    duration: "1h 43m",
    categories: ["adventure", "family", "fantasy"],
    director: "Hayao Miyazaki",
    rating: "G"
  },
  {
    id: 6,
    title: "Kiki's Delivery Service",
    description: "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
    thumbnail: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/4bG17OYs-GA",
    year: 1989,
    duration: "1h 42m",
    categories: ["adventure", "drama", "family"],
    director: "Hayao Miyazaki",
    rating: "G"
  },
  {
    id: 7,
    title: "Castle in the Sky",
    description: "A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.",
    thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/8ykEy-yPBFc",
    year: 1986,
    duration: "2h 4m",
    categories: ["adventure", "fantasy", "family"],
    director: "Hayao Miyazaki",
    rating: "PG"
  },
  {
    id: 8,
    title: "The Wind Rises",
    description: "A look at the life of Jiro Horikoshi, the man who designed Japanese fighter planes during World War II.",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/imtdgdGOB6Q",
    year: 2013,
    duration: "2h 6m",
    categories: ["biography", "drama", "romance"],
    director: "Hayao Miyazaki",
    rating: "PG-13"
  },
  {
    id: 9,
    title: "Grave of the Fireflies",
    description: "A young boy and his little sister struggle to survive in Japan during World War II.",
    thumbnail: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/4vPeTSRd580",
    year: 1988,
    duration: "1h 29m",
    categories: ["drama", "war", "animation"],
    director: "Isao Takahata",
    rating: "PG-13"
  },
  {
    id: 10,
    title: "The Tale of The Princess Kaguya",
    description: "Found inside a bamboo stalk, a tiny girl grows into an elegant lady raised by an old bamboo cutter and his wife, who sends her off to the capital.",
    thumbnail: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/W71mtorCZDw",
    year: 2013,
    duration: "2h 17m",
    categories: ["drama", "fantasy", "family"],
    director: "Isao Takahata",
    rating: "PG"
  },
  {
    id: 11,
    title: "Only Yesterday",
    description: "A twenty-seven-year-old office worker travels to the countryside while reminiscing about her childhood in Tokyo.",
    thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/OfkQlZArxw0",
    year: 1991,
    duration: "1h 58m",
    categories: ["drama", "romance", "animation"],
    director: "Isao Takahata",
    rating: "PG"
  },
  {
    id: 12,
    title: "From Up on Poppy Hill",
    description: "A group of Yokohama teens look to save their school's clubhouse from the wrecking ball in preparations for the 1964 Tokyo Olympics.",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/9nzpB_gBOkc",
    year: 2011,
    duration: "1h 31m",
    categories: ["drama", "romance", "family"],
    director: "Gorō Miyazaki",
    rating: "PG"
  },
  {
    id: 13,
    title: "Nausicaä of the Valley of the Wind",
    description: "Warrior and pacifist Princess Nausicaä desperately struggles to prevent two warring nations from destroying themselves and their dying planet.",
    thumbnail: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/6zhLBe319KE",
    year: 1984,
    duration: "1h 57m",
    categories: ["adventure", "fantasy", "sci-fi"],
    director: "Hayao Miyazaki",
    rating: "PG"
  },
  {
    id: 14,
    title: "Whisper of the Heart",
    description: "A love story between a girl who loves reading books, and a boy who has previously checked out all of the library books she chooses.",
    thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/0pVkiod6V0U",
    year: 1995,
    duration: "1h 51m",
    categories: ["drama", "romance", "family"],
    director: "Yoshifumi Kondō",
    rating: "G"
  },
  {
    id: 15,
    title: "Porco Rosso",
    description: "In 1930s Italy, a veteran World War I pilot is cursed to look like an anthropomorphic pig.",
    thumbnail: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/awEC-aLDzjs",
    year: 1992,
    duration: "1h 34m",
    categories: ["adventure", "comedy", "fantasy"],
    director: "Hayao Miyazaki",
    rating: "PG"
  },
  {
    id: 16,
    title: "The Cat Returns",
    description: "After helping a cat, a seventeen-year-old girl finds herself involuntarily engaged to a cat Prince in a magical world where her only hope of freedom lies with a dapper cat statuette come to life.",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/Gp-H_YOcYTM",
    year: 2002,
    duration: "1h 15m",
    categories: ["adventure", "comedy", "family"],
    director: "Hiroyuki Morita",
    rating: "G"
  },
  {
    id: 17,
    title: "Pom Poko",
    description: "A community of magical shape-shifting raccoons struggle to prevent their forest home from being destroyed by urban development.",
    thumbnail: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/_7cowIHjCD4",
    year: 1994,
    duration: "1h 59m",
    categories: ["animation", "comedy", "drama"],
    director: "Isao Takahata",
    rating: "PG"
  },
  {
    id: 18,
    title: "My Neighbors the Yamadas",
    description: "The life and misadventures of a family in contemporary Japan.",
    thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/1C9ujuCPlnY",
    year: 1999,
    duration: "1h 44m",
    categories: ["animation", "comedy", "family"],
    director: "Isao Takahata",
    rating: "PG"
  },
  {
    id: 19,
    title: "Ocean Waves",
    description: "As a young man returns home after his first year away at college he recalls his senior year of high school and the iron-willed, big city girl that turned his world upside down.",
    thumbnail: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/tfkHiHjrqa8",
    year: 1993,
    duration: "1h 12m",
    categories: ["drama", "romance", "slice of life"],
    director: "Tomomi Mochizuki",
    rating: "PG"
  },
  {
    id: 20,
    title: "The Secret World of Arrietty",
    description: "The Clock family are four-inch-tall people who live anonymously in another family's residence, borrowing simple items to make their home. Life changes for the Clocks when their teenage daughter, Arrietty, is discovered.",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/9CtIXPhPo0g",
    year: 2010,
    duration: "1h 34m",
    categories: ["animation", "adventure", "family"],
    director: "Hiromasa Yonebayashi",
    rating: "G"
  },
  {
    id: 21,
    title: "When Marnie Was There",
    description: "Due to her asthma, Anna is sent to stay with relatives of her guardian in the Japanese countryside. She likes to be alone, sketching. She befriends Marnie, who lived in the mansion across the pond. A young girl discovers a connection that helps her discover the truth about herself.",
    thumbnail: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/jjmrxqcQdYg",
    year: 2014,
    duration: "1h 43m",
    categories: ["drama", "mystery", "family"],
    director: "Hiromasa Yonebayashi",
    rating: "PG"
  },
  {
    id: 22,
    title: "Tales from Earthsea",
    description: "In a mythical land, a man and a young boy investigate a series of unusual occurrences.",
    thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/8hxYx3Jq3kI",
    year: 2006,
    duration: "1h 55m",
    categories: ["adventure", "fantasy", "animation"],
    director: "Gorō Miyazaki",
    rating: "PG-13"
  },
  {
    id: 23,
    title: "The Red Turtle",
    description: "A man is shipwrecked on a deserted island and encounters a red turtle, which changes his life.",
    thumbnail: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/Sw7BggqBpTk",
    year: 2016,
    duration: "1h 20m",
    categories: ["animation", "fantasy", "drama"],
    director: "Michael Dudok de Wit",
    rating: "PG"
  },
  {
    id: 24,
    title: "Earwig and the Witch",
    description: "An orphan girl, Earwig, is adopted by a witch and comes home to a spooky house filled with mystery and magic.",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/apTwcwqcKXQ",
    year: 2020,
    duration: "1h 22m",
    categories: ["animation", "adventure", "family"],
    director: "Gorō Miyazaki",
    rating: "PG"
  },
  {
    id: 25,
    title: "Ponyo on the Cliff by the Sea",
    description: "During a forbidden excursion to see the surface world, a goldfish princess encounters a human boy named Sosuke, who gives her the name Ponyo. Ponyo longs to become human, and as her friendship with Sosuke grows, she becomes more humanlike.",
    thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/CsR3KVgBzSM",
    year: 2008,
    duration: "1h 41m",
    categories: ["animation", "adventure", "family"],
    director: "Hayao Miyazaki",
    rating: "G"
  },
  {
    id: 26,
    title: "Howl's Moving Castle: Director's Cut",
    description: "An extended version of the beloved tale where a young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard.",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/iwROgK94zcM",
    year: 2004,
    duration: "2h 15m",
    categories: ["fantasy", "adventure", "romance"],
    director: "Hayao Miyazaki",
    rating: "PG"
  },
  {
    id: 27,
    title: "My Neighbor Totoro: 30th Anniversary Edition",
    description: "The special anniversary edition with enhanced visuals and sound of the beloved story where two young girls encounter a friendly forest spirit named Totoro.",
    thumbnail: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/92a7Hj0ijLs",
    year: 2018,
    duration: "1h 28m",
    categories: ["fantasy", "family", "adventure"],
    director: "Hayao Miyazaki",
    rating: "G"
  },
  {
    id: 28,
    title: "Spirited Away: Remastered",
    description: "The remastered version of the Academy Award-winning film about a 10-year-old girl who wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
    thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/ByXuk9QqQkk",
    year: 2021,
    duration: "2h 5m",
    categories: ["fantasy", "adventure", "family"],
    director: "Hayao Miyazaki",
    rating: "PG"
  },
  {
    id: 29,
    title: "Princess Mononoke: Extended Cut",
    description: "An extended version of the epic tale where a young prince is caught in a struggle between forest gods and the humans who consume its resources.",
    thumbnail: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/4OiMOHRDs14",
    year: 2019,
    duration: "2h 30m",
    categories: ["fantasy", "adventure", "action"],
    director: "Hayao Miyazaki",
    rating: "PG-13"
  },
  {
    id: 30,
    title: "The Collected Works of Hayao Miyazaki",
    description: "A special documentary exploring the masterful works of legendary director Hayao Miyazaki and his impact on animation worldwide.",
    thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&h=300",
    videoUrl: "https://www.youtube.com/embed/ZVCdLi6FGVg",
    year: 2022,
    duration: "2h 10m",
    categories: ["documentary", "animation", "biography"],
    director: "Various",
    rating: "G"
  }
];
