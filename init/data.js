const allData= [
    {
      title: "The Ultimate Guide to Healthy Eating",
      image: {
        url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
        filename:"postImage",
      },
    info: "This comprehensive guide covers everything you need to know about healthy eating, including tips on meal planning, understanding nutrition labels, and how to balance different food groups. Learn how to make healthier food choices, understand the impact of different diets, and get practical advice on how to maintain a balanced diet that fits your lifestyle.",
      categories: "lifestyle",
    },
    {
      title: "Top 10 Travel Destinations for 2024",
      image:{
        url:"https://images.unsplash.com/photo-1502920514313-52581002a659?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfDB8MHx8fDA%3D",
        filename:"postImage",
      } ,
    info: "Planning your next vacation? Explore our curated list of the top 10 travel destinations for 2024. From pristine beaches and bustling cities to hidden gems off the beaten path, discover the best places to visit this year. Each destination is detailed with must-see attractions, cultural highlights, and travel tips to make your trip unforgettable.",
      categories: "travel"
    },  
    {
      title: "How to Start a Successful Blog",
      image:{
        url:"https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdyUyMHRvJTIwc3RhcnQlMjBhJTIwcG9kY2FzdHxlbnwwfDB8MHx8fDA%3D",
        filename:"postImage"
      } ,
    info: "Thinking about starting a blog? This guide walks you through the entire process, from choosing a niche and setting up your website to creating engaging content and growing your readership. Whether you’re blogging as a hobby or looking to build a business, you'll find valuable tips and insights to help you succeed in the competitive world of blogging.",
      categories: "lifestyle"
    },
    {
      title: "The Future of Artificial Intelligence",
      image:{
        url:"https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpfGVufDB8MHwwfHx8MA%3D%3D",
        filename:"postImage",
      } ,
    info: "Artificial Intelligence is rapidly transforming industries across the globe. In this article, we delve into the latest advancements in AI, from machine learning algorithms to autonomous systems. Explore how AI is reshaping the future of work, healthcare, transportation, and more, and consider the ethical implications and challenges that come with these technological advancements.",
      categories: "technology"
    },
    {
      title: "10 Best Books to Read This Year",
      image:{
        url:"https://images.unsplash.com/photo-1505063366573-38928ae5567e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3N8ZW58MHwwfDB8fHww",
        filename:"postImage",
      } ,
    info: "Looking for your next great read? We've compiled a list of the 10 best books of the year, spanning a range of genres including fiction, non-fiction, memoirs, and more. Each book is reviewed in detail, highlighting what makes it a must-read and who will enjoy it the most. Whether you’re into thrillers, romance, or self-help, there's something on this list for everyone.",
      categories: "lifestyle"
    },
    {
      title: "Mastering the Art of Photography",
      image:{
        url:"https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RncmFwaHl8ZW58MHwwfDB8fHww",
        filename:"postImage",
      } ,
    info: "Photography is more than just snapping pictures; it's an art form that requires an understanding of light, composition, and timing. In this blog post, we explore the techniques and tools that professional photographers use to capture stunning images. Whether you're a beginner or an experienced photographer, you'll find valuable tips to take your skills to the next level.",
      categories: "lifestyle"
    },
    {
      title: "The Impact of Climate Change on Our World",
      image:{
        url:"https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsaW1hdGUlMjBjaG5nZXxlbnwwfDB8MHx8fDA%3D",
        filename:"postImage",
      } ,
    info: "Climate change is one of the most pressing issues of our time. This article examines the effects of climate change on our environment, economy, and society. Learn about the science behind global warming, the consequences of rising temperatures, and the actions we can take to mitigate its impact. Understand how climate change is affecting ecosystems, weather patterns, and human health.",
      categories: "weather"
    },
    {
      title: "Exploring the World of Cryptocurrency",
      image:{
        url:"https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5cHRvY3VycmVuY3l8ZW58MHwwfDB8fHww",
        filename:"postImage",
      } ,
    info: "Cryptocurrency has taken the financial world by storm, but what exactly is it? This blog post provides an in-depth look at the world of digital currencies, including Bitcoin, Ethereum, and emerging altcoins. Discover how cryptocurrencies work, their potential benefits and risks, and the future of decentralized finance. Whether you're a seasoned investor or just curious, this guide has you covered.",
      categories: "crypto"
    },
    {
      title: "The Rise of Remote Work",
      image:{
        url:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename:"postImage",
      } ,
    info: "Remote work has become the new norm for many people around the globe. This article explores the benefits and challenges of working from home, including productivity tips, the importance of work-life balance, and the future of remote work in a post-pandemic world. Learn how companies are adapting to this trend and what it means for the future of the workplace.",
      categories: "startup"
    },
    {
      title: "The Best Fitness Routines for Busy People",
      image:{
        url:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename:"postImage",

      } ,
    info: "Finding time to exercise can be a challenge, especially with a busy schedule. This blog post offers a range of fitness routines designed for people on the go. From quick workouts you can do at home to effective strategies for fitting exercise into your day, discover how to stay fit and healthy without sacrificing your other responsibilities.",
      categories: "fitness"
    },
    {
      title: "The Evolution of Video Games",
      image:{
        url:"https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmlkZW8lMjBnYW1lc3xlbnwwfDB8MHx8fDA%3D",
        filename:"postImage",
      } ,
    info: "Video games have come a long way since the days of Pong and Pac-Man. This article traces the history of video games, from their humble beginnings to the multi-billion dollar industry they are today. Explore the technological advancements that have shaped gaming, the cultural impact of iconic games, and the future trends that are set to revolutionize the gaming world.",
      categories: "games"
    },
    {
      title: "Understanding Mental Health in the Modern World",
      image:{
        url:"https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVudGFsJTIwaGVhbHRofGVufDB8MHwwfHx8MA%3D%3D",
        filename:"postImage",
      } ,
    info: "Mental health is a crucial aspect of overall well-being, yet it often goes overlooked. In this blog post, we discuss the importance of mental health, the signs of common mental health disorders, and strategies for managing stress and anxiety. Learn how to seek help, support loved ones, and create a mentally healthy environment at home and work.",
      categories: "lifestyle"
    },
    {
      title: "The Art of Minimalist Living",
      image:{
        url:"https://images.unsplash.com/photo-1521782462922-9318be1cfd04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWluYW1hbGlzdCUyMGxpdmluZ3xlbnwwfDB8MHx8fDA%3D   ",
        filename:"postImage"
      } ,
    info: "Minimalism is more than just decluttering; it's a lifestyle choice that promotes simplicity and intentionality. This article explores the principles of minimalist living, including how to reduce excess, focus on what truly matters, and create a more fulfilling life with less. Discover practical tips for adopting a minimalist mindset in your home, work, and relationships.",
      categories: "lifestyle"
    },
    {
      title: "The Science Behind Sleep and Productivity",
      image:{
        url:"https://images.unsplash.com/photo-1521782462922-9318be1cfd04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWluYW1hbGlzdCUyMGxpdmluZ3xlbnwwfDB8MHx8fDA%3D",
        filename:"postImage",
      } ,
    info: "Sleep plays a critical role in our health and productivity. In this blog post, we dive into the science of sleep, exploring how it affects brain function, physical health, and emotional well-being. Learn about the different stages of sleep, the impact of sleep deprivation, and tips for improving sleep quality to boost productivity and overall quality of life.",
      categories: "science"
    },
    {
      title: "A Beginner's Guide to Yoga",
      image:{
        url:"https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfDB8MHx8fDA%3D",
        filename:"postImage",
      } ,
    info: "Yoga is a practice that combines physical postures, breathing exercises, and meditation to promote overall well-being. This guide is designed for beginners looking to start their yoga journey. Learn about the different styles of yoga, the benefits of regular practice, and how to create a routine that fits your lifestyle. Whether you're looking to improve flexibility, reduce stress, or find inner peace, yoga has something to offer.",
      categories: "fitness"
    },
    {
      title: "The Importance of Financial Literacy",
      image:{
        url:"https://plus.unsplash.com/premium_photo-1679923906285-386991e8d862?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmluYW5jaWFsJTIwbGl0ZXJhY3l8ZW58MHwwfDB8fHww",
        filename:"postImage",
      } ,
    info: "Financial literacy is essential for making informed decisions about money. This article covers the basics of personal finance, including budgeting, saving, investing, and managing debt. Learn how to create a financial plan, understand credit scores, and prepare for the future. Whether you're just starting out or looking to improve your financial skills, this guide provides valuable insights.",
      categories: "finance"
    },
    {
      title: "Sustainable Living: How to Reduce Your Carbon Footprint",
      image:{
        url:"https://plus.unsplash.com/premium_photo-1681885143542-dc9303b9775d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VzdGFpbmFibGUlMjBsaXZpbmd8ZW58MHwwfDB8fHww",
        filename:"postImage",
      } ,
    info: "Living sustainably means making choices that reduce your impact on the environment. This blog post offers practical tips for reducing your carbon footprint, from conserving energy and water to adopting eco-friendly products and practices. Learn how to make small changes in your daily life that can lead to a more sustainable and environmentally-friendly lifestyle.",
      categories: "lifestyle"
    },
    {
      title: "The Role of Technology in Education",
      image:{
        url:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neSUyMGluJTIwZWR1YWN0aW9ufGVufDB8MHwwfHx8MA%3D%3D",
        filename:"postImage",
      } ,
    info: "Technology is transforming education in ways we never imagined. This article explores the impact of digital tools and resources on teaching and learning, including the benefits and challenges of online education. Discover how technology is being used to enhance student engagement, personalize learning experiences, and prepare students for the future job market.",
      categories: "technology"
    },
    {
      title: "The Benefits of Mindfulness Meditation",
      image:{
        url:"https://images.unsplash.com/reserve/YEc7WB6ASDydBTw6GDlF_antalya-beach-lulu.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaXRhdGlvbnxlbnwwfDB8MHx8fDA%3D",
        filename:"postImage",
      } ,
    info: "Mindfulness meditation is a powerful tool for reducing stress and improving mental clarity. This blog post explores the benefits of mindfulness, including how it can help with anxiety, depression, and overall well-being. Learn how to start a mindfulness practice, incorporate it into your daily routine, and experience the positive effects on your mind and body.",
      categories: "fitness"
    },
    {
      title: "Exploring the World of Plant-Based Diets",
      image:{
        url:"https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlldHxlbnwwfDB8MHx8fDA%3D",
        filename:"postImage",
      } ,
    info: "Plant-based diets are gaining popularity for their health and environmental benefits. This article provides an in-depth look at the different types of plant-based diets, including vegetarian, vegan, and flexitarian. Discover the health benefits of reducing meat consumption, learn how to plan balanced meals, and explore delicious plant-based recipes that are both nutritious and satisfying.",
      categories: "food"
    },
    {
      title: "The Evolution of Fashion Trends",
      image:{
        url:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D",
        filename:"postImage",
      } ,
    info: "Fashion is constantly evolving, reflecting changes in culture, technology, and society. This article takes a look at the history of fashion trends, from the early 20th century to the present day. Explore the key moments that have shaped modern fashion, the role of designers and influencers, and the future of sustainable fashion. Stay ahead of the curve with insights into the latest trends and how to incorporate them into your wardrobe.",
      categories: "fashion"
    },
    {
      title: "The Power of Positive Thinking",
      image:{
        url:"https://images.unsplash.com/photo-1642939646286-b20a6796bce1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvc3RpdmUlMjB2aWJlc3xlbnwwfDB8MHx8fDA%3D",
        filename:"postImage",
      } ,
    info: "Positive thinking can have a profound impact on your life, from improving mental health to increasing resilience in the face of challenges. This blog post explores the science behind positive thinking, including how it affects the brain and body. Learn practical techniques for cultivating a positive mindset, overcoming negative thoughts, and building a more optimistic outlook on life.",
      categories: "lifestyle"
    },
    {
      title: "A Deep Dive into Blockchain Technology",
      image:{
        url:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvY2tjaGFpbiUyMHRlY2hub2xvZ3l8ZW58MHwwfDB8fHww",
        filename:"postImage",
      } ,
    info: "Blockchain technology is revolutionizing industries by providing a secure and transparent way to record transactions. This article offers a detailed explanation of how blockchain works, its applications beyond cryptocurrency, and its potential to disrupt traditional business models. Explore the benefits and challenges of adopting blockchain technology and the future trends in this rapidly evolving field.",
      categories: "technology"
    },
    {
      title: "The Health Benefits of Outdoor Activities",
      image:{
        url:"https://images.unsplash.com/photo-1680529643198-e4207c3fc209?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3V0ZG9vciUyMGFjdGl2aXRpZXN8ZW58MHwwfDB8fHww",
        filename:"postImage",
      } ,
    info: "Spending time outdoors offers a range of health benefits, from physical fitness to mental well-being. This blog post highlights the positive effects of outdoor activities such as hiking, cycling, and gardening. Learn how connecting with nature can reduce stress, improve mood, and boost overall health. Get tips on how to incorporate more outdoor activities into your routine, regardless of your fitness level.",
      categories: "fitness"
    },
    {
      title: "How to Build Strong Relationships",
      image:{
        url:"https://images.unsplash.com/photo-1516641239768-dc3572bdca04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3Ryb25nJTIwcmVsYXRpb25zaGlwfGVufDB8MHwwfHx8MA%3D%3D",
        filename:"postImage",
      } ,
    info: "Healthy relationships are essential for a fulfilling life. This article explores the key elements of strong relationships, including communication, trust, and mutual respect. Learn how to build and maintain positive relationships with family, friends, and partners. Whether you're looking to strengthen existing relationships or form new ones, this guide provides valuable insights and advice.",
      categories: "lifestyle"
    },
    {
      title: "The Intersection of Art and Technology",
      image:{
        url:"https://plus.unsplash.com/premium_photo-1661335231844-b66fc5284398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0JTIwYW5kJTIwdGVjaG5vbG9neXxlbnwwfDB8MHx8fDA%3D",
        filename:"postImage",
      } ,
    info: "The fusion of art and technology is creating new possibilities for creative expression. This blog post explores how digital tools are transforming the art world, from virtual reality exhibitions to AI-generated artwork. Discover how artists are using technology to push boundaries, reach new audiences, and create innovative works that challenge traditional notions of art.",
      categories: "technology"
    },
    {
      title: "The Science of Happiness",
      image:{
        url:"https://plus.unsplash.com/premium_photo-1669137759430-3a04cd1a7cd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFwcGluZXNzfGVufDB8MHwwfHx8MA%3D%3D",
        filename:"postImage",
      } ,
    info: "What makes us happy? This article delves into the science of happiness, exploring the factors that contribute to a fulfilling life. Learn about the role of genetics, environment, and personal choices in determining happiness. Discover practical strategies for increasing your happiness, from practicing gratitude to fostering meaningful connections with others.",
      categories: "science"
    },
    {
      title: "Understanding the Stock Market",
      image:{
        url:"https://images.unsplash.com/photo-1583752028088-91e3e9880b46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvY2slMjBtYXJrZXR8ZW58MHwwfDB8fHww",
        filename:"postImage",
      } ,
    info: "The stock market can seem complex, but understanding its basics is key to making informed investment decisions. This blog post breaks down the fundamentals of the stock market, including how it works, the different types of stocks, and the factors that influence stock prices. Whether you're a novice investor or looking to deepen your knowledge, this guide provides valuable insights into the world of stock trading.",
      categories: "stocks"
    },
    {
      title: "The Benefits of Volunteering",
      image:{
        url:"https://images.unsplash.com/photo-1607227063002-677dc5fdf96f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZvbHVudGVlcmluZ3xlbnwwfDB8MHx8fDA%3D",
        filename:"postImage",
      } ,
    info: "Volunteering is a rewarding way to give back to your community while gaining personal satisfaction. This article explores the many benefits of volunteering, including the positive impact on mental health, skill development, and social connections. Learn how to find volunteer opportunities that match your interests and how volunteering can lead to personal growth and a deeper sense of purpose.",
      categories: "lifestyle"
    },
    {
      title: "The Role of Nutrition in Athletic Performance",
      image:{
        url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bnV0cml0aW9ufGVufDB8MHwwfHx8MA%3D%3D",
        filename:"postImage",
      },
    info: "Nutrition plays a crucial role in an athlete's performance, recovery, and overall health. This blog post provides an in-depth look at the dietary needs of athletes, including macronutrients, hydration, and supplementation. Learn how to optimize your diet for peak performance, whether you're a professional athlete or a fitness enthusiast looking to improve your results.",
      categories: "fitness"
    }
  ];

  module.exports = {data:allData};
  