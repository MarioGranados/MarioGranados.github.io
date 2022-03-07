const Loading = () => {
    const nerdWords = ['config/', 'installing/', 'script/', 'running/', 'batch/', 'dump/', 'initialize/', 'GUI_IO/'];
    const randomWords = ['machine', 'x', 'window', 'nano_bots', 'lamas', 'potatoes', 'cookies', 'max_width'];
    let current = '';

    Math.random() * 10
        current = "c://" + nerdWords + randomWords;

    return(
        <>
            {current}
        </>
    )
}
export default Loading;