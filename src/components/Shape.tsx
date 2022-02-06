import React from 'react';

interface ShapeProps {
    type: string;
    width: number | undefined;
    height: number | undefined;
    radius: number | undefined;
    color: string;
    x: number;
    y: number;
    isVisible: boolean;
}

export const Shape: React.FC<ShapeProps> = ({
    type,
    width,
    height,
    radius,
    color,
    x,
    y,
    isVisible,
}) => {
    const divRef = React.useRef(null);
    const [coordinates, setCoordinates] = React.useState({
        ['x']: x,
        ['y']: y,
    });
    const [pos, setPos] = React.useState({ x, y });

    const dragStartHandler = (event: React.DragEvent<HTMLDivElement>) => {
        const x = event.pageX - (event.target as HTMLDivElement).offsetLeft;
        const y = event.pageY - (event.target as HTMLDivElement).offsetTop;
        (event.target as HTMLTextAreaElement).style.opacity = '0.1';
        setPos({ x, y });
    };

    const dragEndHandler = (event: React.DragEvent<HTMLDivElement>) => {
        if (event.type === 'dragend') {
            (event.target as HTMLDivElement).style.opacity = '1';
            setCoordinates({
                x: event.pageX - pos.x,
                y: event.pageY - pos.y,
            });
        }
    };

    const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };
    const show = isVisible ? 'visible' : 'hidden';
    const stylesRectangle: React.CSSProperties = {
        visibility: show,
        position: 'absolute',
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
        left: `${coordinates.x}px`,
        top: `${coordinates.y}px`,
        cursor: 'grab',
    };

    const diameter = radius && 2 * radius;

    const stylesCircle: React.CSSProperties = {
        visibility: show,
        position: 'absolute',
        backgroundColor: color,
        left: `${coordinates.x}px`,
        top: `${coordinates.y}px`,
        width: `${diameter}px`,
        height: `${diameter}px`,
        borderRadius: '50%',
        cursor: 'grab',
    };

    return (
        <div
            className="shape"
            ref={divRef}
            draggable
            onDragStart={dragStartHandler}
            onDragLeave={dragEndHandler}
            onDragEnd={dragEndHandler}
            onDragOver={dragOverHandler}
            onDrag={dragHandler}
            style={type === 'Circle' ? stylesCircle : stylesRectangle}
        ></div>
    );
};
