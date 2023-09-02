import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const CreditCard = () => {
    const creditCard = useGLTF('/credit_card_white/scene.gltf');
    
    return <primative object={creditCard.scene}/>;    
};

useGLTF.preload('/credit_card_white/scene.gltf');

const CreditCardComponent = () => {
    return (
        <Canvas>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.8}/>           
            <CreditCard/>
        </Canvas>
    );   
};

export default CreditCardComponent;