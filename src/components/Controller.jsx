// import React, { useRef } from 'react';
// import { Float, useGLTF } from '@react-three/drei';

// export default function Model(props) {
//   const { nodes, materials } = useGLTF('/public/FloatingIcons/ps5_controller.glb');

//   materials['10_-_Default'].color.set(0xff0000); // Bright red
//   materials['11_-_Default'].color.set(0x00ff00); // Bright green
//   materials['16_-_Default'].color.set(0x0000ff); // Bright blue
//   materials.ultrablack.color.set(0xffa500); // Bright orange
//   materials.standard_steel.color.set(0x808080); // Steel grey
//   materials.clear.color.set(0xff1493); // Bright pink

//   // Set colors for the joystick
//   materials.joystickBody = { color: 0xffd700 }; // Golden body
//   materials.joystickBottom = { color: 0xc0c0c0 }; // Silver bottom

//   // Optional: tweak roughness/metalness to make them shinier
//   materials['10_-_Default'].roughness = 0.3; // Lower roughness for a glossy finish
//   materials.ultrablack.roughness = 0.2;
//   return (
//     <Float>
//     <group
//       {...props}
//       dispose={null}
//       position={[-15, 15, 2]} // Adjust position for finer placement in the top-left corner
//       scale={[0.03, 0.03, 0.03]} // Further minimize size
//     >
//       <group position={[0, 13.494, -13.984]} rotation={[-0.56, 0, 0]}>
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <group position={[-0.057, 18.346, 5.655]} rotation={[-Math.PI / 2, 0, 0]}>
//             <group position={[29.939, -0.093, -3.709]}>
//               <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes['Plane002_10_-_Default_0'].geometry}
//                 material={materials['10_-_Default']}
//               />
//               <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes['Plane002_11_-_Default_0'].geometry}
//                 material={materials['11_-_Default']}
//               />
//               <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes['Plane002_16_-_Default_0'].geometry}
//                 material={materials['16_-_Default']}
//               />
//               <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Plane002_ultrablack_0.geometry}
//                 material={materials.ultrablack}
//               />
//               <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Plane002_standard_steel_0.geometry}
//                 material={materials.standard_steel}
//               />
//             </group>
//           </group>
//           <group position={[-0.057, 22.221, -26.994]} rotation={[-Math.PI / 2, 0, 0]}>
//             <mesh
//               castShadow
//               receiveShadow
//               geometry={nodes['touchpad_11_-_Default_0'].geometry}
//               material={materials['11_-_Default']}
//               position={[29.939, -31.784, -7.037]}
//             />
//           </group>
//           {/* More meshes */}
//         </group>
//       </group>
//     </group>
//     </Float>
//   );
// }

// useGLTF.preload('/public/FloatingIcons/ps5_controller.glb');







import React, { useRef } from 'react';
import { Float, useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/FloatingIcons/ps5_controller.glb');

  return (
    <Float>
    <group
      {...props}
      dispose={null}
    >
      <group position={[0, 13.494, -13.984]} rotation={[-0.56, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.057, 18.346, 5.655]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[29.939, -0.093, -3.709]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Plane002_10_-_Default_0'].geometry}
                material={materials['10_-_Default']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Plane002_11_-_Default_0'].geometry}
                material={materials['11_-_Default']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Plane002_16_-_Default_0'].geometry}
                material={materials['16_-_Default']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane002_ultrablack_0.geometry}
                material={materials.ultrablack}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane002_standard_steel_0.geometry}
                material={materials.standard_steel}
              />
            </group>
          </group>
          <group position={[-0.057, 22.221, -26.994]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['touchpad_11_-_Default_0'].geometry}
              material={materials['11_-_Default']}
              position={[29.939, -31.784, -7.037]}
            />
          </group>
          {/* More meshes */}
        </group>
      </group>
    </group>
    </Float>
  );
}

useGLTF.preload('/FloatingIcons/ps5_controller.glb');
