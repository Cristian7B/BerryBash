export const foodEmojis = [
    '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', 
    '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', 
    '🥦', '🥬', '🥒', '🌶️', '🌽', '🥕', '🧄', '🧅', '🥔', 
    '🍠', '🥐', '🥯', '🍞', '🥖', '🥨', '🧀', '🥚', '🍳', '🥓', 
    '🥩', '🍗', '🍖', '🦴', '🌭', '🍔', '🍟', '🍕', '🥪', 
    '🥙', '🧆', '🌮', '🌯', '🥗', '🥘', '🍝', '🍜', 
    '🍲', '🍛', '🍣', '🍱', '🥟', '🍤', '🍙', '🍚', '🍘', '🍥', 
    '🥠', '🥮', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', 
    '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🌰'
];

export const foodStyles = (positionFruit, startGame) => ({
    left: `${positionFruit.x}px`,
    top: `${positionFruit.y}px`,
    display: startGame ? "block" : "none",
    opacity: startGame ? 1 : 0,
});

export const mouseFollowerStyles = (positionMouse, setStyleMouse) => ({
    transform: `translate(${positionMouse.x}px, ${positionMouse.y}px)`,
    display: `${setStyleMouse}`
});