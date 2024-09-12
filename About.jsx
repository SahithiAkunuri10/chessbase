// import React from 'react';
// import '../css/About.css';
 
// const About = () => {
//   return (
//     <div className="about-container">
//       <h1>About Us</h1>
//       <p>
//         Welcome to <span className="site-name">[Your Website Name]</span>, a platform designed for chess enthusiasts of all levels. Whether you’re a beginner learning the rules or an experienced player honing your strategies, we’re here to provide a space for everyone to improve and enjoy this timeless game.
//       </p>
 
//       <h2>Our Mission</h2>
//       <p>
//         At <span className="site-name">[Your Website Name]</span>, our mission is to make chess accessible and enjoyable for everyone. We believe in the power of chess to sharpen minds, enhance problem-solving skills, and build a global community. Our goal is to provide an intuitive platform where players can challenge themselves and others, learn from interactive tools, and grow their skills.
//       </p>
 
//       <h2>Features</h2>
//       <ul>
//         <li><strong>Play Against AI</strong>: Challenge our smart chess engine, which adapts to your skill level.</li>
//         <li><strong>Multiplayer Mode</strong>: Play real-time chess matches against friends or players around the world.</li>
//         <li><strong>Chess Puzzles</strong>: Solve a wide range of puzzles to improve your tactics.</li>
//         <li><strong>Learning Resources</strong>: Access tutorials, guides, and strategies for players at all levels.</li>
//         <li><strong>Game Analysis</strong>: Get detailed insights and analysis of your matches to help you improve.</li>
//       </ul>
 
//       <h2>Why Chess?</h2>
//       <p>
//         Chess is more than just a game; its a battle of minds, strategy, and creativity. By playing chess, you can develop skills like critical thinking, patience, and foresight. Our platform is built to support your growth, whether you're playing casually or aiming to compete at a higher level.
//       </p>
//     </div>
//   );
// };
 
// export default About;
import React, { useState, useEffect, useRef } from 'react';
import '../css/About.css';
 
// Importing images directly
import image1 from '../images/flower.jpg';
// import image2 from '../images/flower.jpg';
// import image3 from '../images/flower.jpg';
// import image4 from '../images/flower.jpg';
 
const About = () => {
  const [activeParagraph, setActiveParagraph] = useState(0);
  const paragraphRefs = useRef([]);
 
  useEffect(() => {
    const handleScroll = () => {
      paragraphRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveParagraph(index);
          }
        }
      });
    };
 
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  return (
    <div className="about-container">
      {/* Image Section */}
      <div className="image-container">
        {/* Conditionally Render Images Based on Active Paragraph */}
        {activeParagraph === 0 && <img src={image1} alt="Chess Image 1" className="active-image" />}
        {activeParagraph === 1 && <img src={image1} alt="Chess Image 2" className="active-image" />}
        {activeParagraph === 2 && <img src={image1} alt="Chess Image 3" className="active-image" />}
        {activeParagraph === 3 && <img src={image1} alt="Chess Image 4" className="active-image" />}
      </div>
 
      {/* Text Section */}
      <div className="text-container">
        <h1>About Us</h1>
        <p ref={(el) => (paragraphRefs.current[0] = el)}>
          Welcome to <span className="site-name">[Your Website Name]</span>, a platform designed for chess enthusiasts of all levels.
          By playing chess, you can develop skills like critical thinking, patience, and foresight. Our platform is built to support your growth, whether you're playing casually or aiming to compete at a higher level.
          Chess is more than just a game; its a battle of minds, strategy, and creativity.
          By playing chess, you can develop skills like critical thinking, patience, and foresight. Our platform is built to support your growth, whether you're playing casually or aiming to compete at a higher level.
          Chess is more than just a game; its a battle of minds, strategy, and creativity.
          By playing chess, you can develop skills like critical thinking, patience, and foresight. Our platform is built to support your growth, whether you're playing casually or aiming to compete at a higher level.
          Chess is more than just a game; its a battle of minds, strategy, and creativity.
          By playing chess, you can develop skills like critical thinking, patience, and foresight. Our platform is built to support your growth, whether you're playing casually or aiming to compete at a higher level.
          Chess is more than just a game; its a battle of minds, strategy, and creativity.

        </p>
 
        <h2>Our Mission</h2>
        <p ref={(el) => (paragraphRefs.current[1] = el)}>
          At <span className="site-name">[Your Website Name]</span>, our mission is to make chess accessible and enjoyable for everyone.
          By playing chess, you can develop skills like critical thinking, patience, and foresight. Our platform is built to support your growth, whether you're playing casually or aiming to compete at a higher level.
          Chess is more than just a game; its a battle of minds, strategy, and creativity.
        </p>
 
        <h2>Features</h2>
        <p ref={(el) => (paragraphRefs.current[2] = el)}>
          <strong>Play Against AI</strong>: Challenge our smart chess engine, which adapts to your skill level.
          Chess is more than just a game; its a battle of minds, strategy, and creativity.
          By playing chess, you can develop skills like critical thinking, patience, and foresight. Our platform is built to support your growth, whether you're playing casually or aiming to compete at a higher level.
          Chess is more than just a game; its a battle of minds, strategy, and creativity.
          By playing chess, you can develop skills like critical thinking, patience, and foresight. Our platform is built to support your growth, whether you're playing casually or aiming to compete at a higher level.
          Chess is more than just a game; its a battle of minds, strategy, and creativity.
        </p>
 
        <h2>Why Chess?</h2>
        <p ref={(el) => (paragraphRefs.current[3] = el)}>
          Chess is more than just a game; it’s a battle of minds, strategy, and creativity.
          Chess is more than just a game; its a battle of minds, strategy, and creativity.
          By playing chess, you can develop skills like critical thinking, patience, and foresight. Our platform is built to support your growth, whether you're playing casually or aiming to compete at a higher level.
          Chess is more than just a game; its a battle of minds, strategy, and creativity.
          By playing chess, you can develop skills like critical thinking, patience, and foresight. Our platform is built to support your growth, whether you're playing casually or aiming to compete at a higher level.
          Chess is more than just a game; its a battle of minds, strategy, and creativity.
        </p>
      </div>
    </div>
  );
};
 
export default About;
