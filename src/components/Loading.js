const Loading = () => {
    const nerdWords = ['config/', 'installing/', 'script/', 'running/', 'batch/', 'dump/', 'initialize/', 'GUI_IO/'];
    const randomWords = ['machine', 'x', 'window', 'nano_bots', 'lamas', 'potatoes', 'cookies', 'max_width'];

        for (let i = 0; i < randomWords.length; i++) {
            setInterval(() => {
                console.log(nerdWords[i] + randomWords[i] + '...');
            }, 2000)
        }

    return(
        <>
        </>
    )
}
export default Loading;