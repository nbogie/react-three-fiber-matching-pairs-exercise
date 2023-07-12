import { Card } from "../core/card";

interface CardBoxProps {
    card: Card;
    flipCard: (c: Card) => void;
}
export function CardBox(props: CardBoxProps) {
    return (
        <group
            position={props.card.pos}
            onClick={() => props.flipCard(props.card)}
            rotation-x={props.card.isFlipped ? Math.PI : 0}
        >
            <mesh scale={[0.7, 0.3, 0.7]} position={[0, 0.15, 0]}>
                <boxBufferGeometry />
                <meshStandardMaterial color={props.card.colour} />
            </mesh>
            <mesh scale={[0.9, 0.3, 0.9]}>
                <boxBufferGeometry />
                <meshStandardMaterial color={"black"} />
            </mesh>
        </group>
    );
}
