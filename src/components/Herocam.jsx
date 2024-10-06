// import { useFrame } from '@react-three/fiber';
// import { easing } from 'maath';
// import React, { useRef } from 'react';

// const Herocam = ({ children,isMobile }) => {
//   const groupRef = useRef();
  
//   if(!isMobile){
//   useFrame((state, delta) => {
//     // Get the mouse pointer position in normalized device coordinates (-1 to +1)
//     const pointer = [state.pointer.x, state.pointer.y];

//     // Calculate the new target position directly based on mouse pointer position
//     const targetPosition = [
//       pointer[0]-10,
//       pointer[1]-5, // Direct mapping for x-axis
//       0         // Y position stays at 0
//         // Direct mapping for z-axis
//     ];

//     // Use easing to move the model towards the target position smoothly
//     easing.dampE(groupRef.current.position, targetPosition, 0.25, delta);

//   })};


//   return (
//     <group ref={groupRef}>
//       {children}
//     </group>
//   );
// };

// export default Herocam;


import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React, { useRef } from 'react';

const Herocam = ({ children, isMobile }) => {
  const groupRef = useRef();

  // Only run the movement function if the device is not mobile
  useFrame((state, delta) => {
    if (!isMobile) {
      // Get the mouse pointer position in normalized device coordinates (-1 to +1)
      const pointer = [state.pointer.x, state.pointer.y];

      // Calculate the new target position based on mouse pointer position with some offset
      const targetPosition = [
        pointer[0] - 10,   // Adjust for x-axis
        pointer[1] - 5,    // Adjust for y-axis
        0                  // Z position stays at 0
      ];

      // Smoothly move the model towards the target position
      easing.dampE(groupRef.current.position, targetPosition, 0.25, delta);
    }
  });

  return (
    <group ref={groupRef}>
      {children}
    </group>
  );
};

export default Herocam;
