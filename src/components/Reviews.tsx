import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-yellow-500",
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
const reviews = [
  {
    id: 1,
    name: 'Anatolec',
    date: '17 April 2024',
    rating: 5,
    text: 'Luqman went above and beyond to bring my ideas to life. Communication was great and very responsive. I\'ll definitely be using Luqman again in the future!',
  },
  {
    id: 2,
    name: 'cormso',
    date: '11 June 2024',
    rating: 5,
    text: 'Very professional attitude, very polite, listened to my needs and guided me so that I can get the result that I want. If you are afraid of not getting what you want, don\'t be! Thank you very much.',
  },
  {
    id: 3,
    name: 'Steve Duchene',
    date: '10 April 2024',
    rating: 5,
    text: 'It has been a pleasure to work with Luqman. We recommend 100% this great artist with a promising future ahead of him. -Poh & Steve.',
  },
  {
    id: 4,
    name: 'Valentin F',
    date: '2 March 2024',
    rating: 5,
    text: 'Thank you. I am very happy to have worked with Luqman. Professional, talented and kind',
  },
  {
    id: 5,
    name: 'Jeanmarc Mukendi',
    date: '17 February 2024',
    rating: 5,
    text: 'Great communication from start to finish and provided an exceptional service. He gave me me good insights on how to improve my business and I aim to work with Luqman again in the near future. He is a great asset.',
  },
  {
    id: 6,
    name: 'Dylan Kchr',
    date: '14 February 2024',
    rating: 5,
    text: 'It was a pleasure to work with Luqman. A good listener, and knows what he\'s doing. He will exceed your expecations and do his best to deliver work that will 100% fit your need.',
  },
  {
    id: 7,
    name: 'Felipe Brab',
    date: '22 January 2024',
    rating: 4,
    text: 'It was awesome work with Luqman! I recommend it to everyone.',
  },
  {
    id: 8,
    name: 'Alejandro Verasc',
    date: '19 January 2024',
    rating: 5,
    text: 'amazing service, time management, and quality work',
  },
  {
    id: 9,
    name: 'Forfriendzone',
    date: '15 January 2024',
    rating: 5,
    text: 'I recommend this seller, he is extremely professional even if you give him a lot of feedback! thanks again',
  },
  {
    id: 10,
    name: 'Marg4uux',
    date: '27 September 2023',
    rating: 5,
    text: 'worked with Luqman after seeing his work and liked what he did. He\'s a great guy who works with love! Pour les Français il est super compréhensif et aucun souci sur votre Anglais si il est approximatif donc ne vous inquiétez pas et foncez les yeux fermées !',
  },
  {
    id: 11,
    name: 'Baptisyep',
    date: '23 September 2023',
    rating: 5,
    text: 'Wonderful!',
  },
  {
    id: 12,
    name: 'Les Bedjouzes',
    date: '19 September 2023',
    rating: 5,
    text: 'Luqman vas very patient and kind with the tough customer i was 😂 I\'m very happy with the result and hope we\'ll work together again soon. Luqman has top listening skills, is easy to reach and has good understanding of what the customer wants Hope to work with you again soon !',
  },
  {
    id: 13,
    name: 'Dorian Cocatrix',
    date: '6 September 2023',
    rating: 5,
    text: 'Work done quickly (10 hours). Corresponds perfectly to my expectations. Really satisfied with the final result and my exchanges with Luqman. I recommend working with him.',
  },
  {
    id: 14,
    name: 'Crthrdn',
    date: '1 September 2023',
    rating: 5,
    text: 'Fantastic designer. Very prompt responses. Will return!',
  },
  {
    id: 15,
    name: 'Korinocho',
    date: '18 August 2023',
    rating: 5,
    text: 'Great design. Undersrtood totally what I asked for and delivered the overlay in no time. Excellente design and smooth videos. Would totally ask him for another projects in the future. Totally recommended.',
  },
  {
    id: 16,
    name: 'Hyoki',
    date: '3 August 2023',
    rating: 5,
    text: 'Muy buena atención la verdad es una agradable persona y entiende a la perfección con lo pedido 10/10 / Very good attention, he\'s a nice person and he understands perfectly what was requested 10/10',
  },
  {
    id: 17,
    name: 'Soni Mulroy',
    date: '22 July 2023',
    rating: 5,
    text: 'Quick to reply and got the job done in time.',
  },
  {
    id: 18,
    name: 'ND Gaming',
    date: '21 July 2023',
    rating: 5,
    text: 'He is very nice and enthusiastic to support and advise, or when I need to edit the project according to my opinion without complaint. Prepare draft file, complete the project very quickly. 5 stars above all excellent. I will continue to work with him and future projects.',
  },
  {
    id: 19,
    name: 'Ivy Green',
    date: '24 June 2023',
    rating: 5,
    text: 'I loved working with Luqmankittur! They got back to me quickly and were always professional! Luqmankittur did some fantastic work, and I\'m so excited to start using my new stream overlay! My logo is super cute and eye-catching! I absolutely adore Luqmankittur work and will have them in mind when getting new work!',
  },
  {
    id: 20,
    name: 'Wearz',
    date: '21 June 2023',
    rating: 5,
    text: 'Very kind, very good and listen to the customer. Thanks a lot',
  },
  {
    id: 21,
    name: 'Jose Grobles',
    date: '11 May 2023',
    rating: 5,
    text: 'Amazing communication and results!',
  },
  {
    id: 22,
    name: 'Asterion Bon',
    date: '7 March 2023',
    rating: 5,
    text: 'Awesome, thank you.',
  },
  {
    id: 23,
    name: 'Cristina Aje',
    date: '20 April 2023',
    rating: 5,
    text: 'HE\'S SO GOOD I HIGHLY RECOMMEND HIM.',
  },
  {
    id: 24,
    name: 'Asundere',
    date: '12 April 2023',
    rating: 5,
    text: 'Fast, Responsive, and Professional. He offers really great pricing options for those who want a nice pop of graphics to add to their streaming yet something personalized for every customer who wishes to have something unique to their brand and design.',
  },
  {
    id: 25,
    name: 'Lil Ghere',
    date: '14 April 2023',
    rating: 5,
    text: 'Nice, exactly what i asked for.',
  },
  {
    id: 26,
    name: 'Haz Whealy',
    date: '20 April 2023',
    rating: 5,
    text: 'I spent a lot of time working with artists on Fiverr, but he is by far the best person I have ever worked with on this platform! He was super receptive to all feedback and very professional. I am so happy with my final product from him and I genuinely couldn\'t recommend him more! He went above and beyond to create a perfect overlay for my stream, and I will definitely be working more with him in the future. 11/10 best experience on this platform',
  },
  {
    id: 27,
    name: 'Fefron',
    date: '13 March 2023',
    rating: 5,
    text: 'Excellent service, really professional. He was so communicative and attentive, great experience!!',
  },
  {
    id: 28,
    name: 'Alexey Kolesniko',
    date: '7 March 2023',
    rating: 5,
    text: 'like! like! like!',
  },
  {
    id: 29,
    name: 'Ask Anoushka',
    date: '2 March 2023',
    rating: 5,
    text: 'Very good work highly recommend.',
  },
  {
    id: 30,
    name: 'Tyler P',
    date: '22 February 2023',
    rating: 4,
    text: 'High quality and speedy service.',
  },
  {
    id: 31,
    name: 'El Ted',
    date: '15 February 2023',
    rating: 5,
    text: 'Really good job, perfect comunication and really responsible, i want make more projects with him in the future.',
  },
  {
    id: 32,
    name: 'Rukusua',
    date: '19 January 2023',
    rating: 5,
    text: 'Great seller, amazing communication and design totally in love with the product highly highly recommend.',
  },
  {
    id: 33,
    name: 'Cryro',
    date: '2 January 2023',
    rating: 5,
    text: 'My first time using fiver and it was made very easy. Very open to different ideas and has great ideas on how to improve your ideas himself, very nice to work with and completes work within a short amount of time. Would recommend!',
  },
  {
    id: 34,
    name: 'Grimortal',
    date: '12 September 2022',
    rating: 5,
    text: 'Used this seller yet again. Fantastic service; always willing to go the extra mile. Sorted for now; but all future graphic needs are coming to this seller. Top bloke.',
  },
  {
    id: 35,
    name: 'Grimortal',
    date: '9 September 2022',
    rating: 5,
    text: 'Have loved working with the seller and will be continuing to use in the future. Took all ideas into consideration and communicated his ideas to me. Lovely chap; would 1000% recommend.',
  },
  {
    id: 36,
    name: 'Sam Whaiiey',
    date: '20 July 2022',
    rating: 5,
    text: 'An absolute pleasure to work with, very happy with the final result.',
  },
  {
    id: 37,
    name: 'Ronald Cascante',
    date: '22 May 2022',
    rating: 5,
    text: 'Como siempre impecable [As always impeccable]',
  },
];

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          
          {/* Main Review Card */}
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto animate-slide-up">
            <div className="text-center">

              {/* Avatar */}
              <div className="mb-6 flex justify-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold 
    ${colors[currentIndex % colors.length]}`}
                >
                  {getInitials(reviews[currentIndex].name)}
                </div>
              </div>


              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
                "{reviews[currentIndex].text}"
              </blockquote>

              {/* Author Info */}
              <div>
                <div className="text-lg font-semibold text-foreground">
                  {reviews[currentIndex].name}
                </div>
                <div className="text-muted-foreground">
                  {reviews[currentIndex].date}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 glass-card p-3 rounded-full hover:bg-secondary/50 transition-all duration-300 hover:scale-110"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 glass-card p-3 rounded-full hover:bg-secondary/50 transition-all duration-300 hover:scale-110"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Elegant Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {(() => {
            const maxDots = 5;
            const totalReviews = reviews.length;
            
            if (totalReviews <= maxDots) {
              // Show all dots if we have 5 or fewer reviews
              return reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 h-3 bg-primary'
                      : 'w-3 h-3 bg-muted-foreground/40 hover:bg-muted-foreground/60'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ));
            }
            
            // For many reviews, show simplified pagination dots
            const dots = [];
            const showFirst = currentIndex > 2;
            const showLast = currentIndex < totalReviews - 3;
            
            // First dot
            if (showFirst) {
              dots.push(
                <button
                  key="first"
                  onClick={() => goToSlide(0)}
                  className="w-3 h-3 rounded-full bg-muted-foreground/40 hover:bg-muted-foreground/60 transition-all duration-300"
                  aria-label="Go to first review"
                />
              );
              dots.push(<span key="dots1" className="text-muted-foreground/60 text-xs self-center">•••</span>);
            }
            
            // Current and surrounding dots
            const start = Math.max(0, currentIndex - 1);
            const end = Math.min(totalReviews - 1, currentIndex + 1);
            
            for (let i = start; i <= end; i++) {
              dots.push(
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'w-8 h-3 bg-primary'
                      : 'w-3 h-3 bg-muted-foreground/40 hover:bg-muted-foreground/60'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              );
            }
            
            // Last dot
            if (showLast) {
              dots.push(<span key="dots2" className="text-muted-foreground/60 text-xs self-center">•••</span>);
              dots.push(
                <button
                  key="last"
                  onClick={() => goToSlide(totalReviews - 1)}
                  className="w-3 h-3 rounded-full bg-muted-foreground/40 hover:bg-muted-foreground/60 transition-all duration-300"
                  aria-label="Go to last review"
                />
              );
            }
            
            return dots;
          })()}
        </div>
      </div>
    </section>
  );
};

export default Reviews;