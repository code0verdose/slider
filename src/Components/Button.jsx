export function Button({direction, onClick}) {
    return (
        <>
            <button
                onClick={() => {
                    onClick();
                }}
                className={
                    direction === "prev"
                        ? "carousel-control-prev"
                        : "carousel-control-next"
                }
                type="button"
            >
        <span
            className={
                direction === "prev"
                    ? "carousel-control-prev-icon"
                    : "carousel-control-next-icon"
            }
            aria-hidden="true"
        ></span>
                {direction === "prev" ? (
                    <span className="visually-hidden">Предыдущий</span>
                ) : (
                    <span className="visually-hidden">Следующий</span>
                )}
            </button>
        </>
    );
}
