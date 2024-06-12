import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Programmer',
        1000,
        'Designer',
        1000,
        'Leader',
        1000
      ]}
    
      speed={50}
    className='text-[3rem] md:text-[4rem] text-[#1fd655]'
      repeat={Infinity}
    />
  );
};

export default TextEffect