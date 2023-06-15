export default NativePlayer;
declare class NativePlayer {
    constructor(mediaDataSource: any, config: any);
    TAG: string;
    _type: string;
    _emitter: any;
    _config: {
        enableWorker: boolean;
        enableStashBuffer: boolean;
        stashInitialSize: any;
        isLive: boolean;
        liveBufferLatencyChasing: boolean;
        liveBufferLatencyMaxLatency: number;
        liveBufferLatencyMinRemain: number;
        lazyLoad: boolean;
        lazyLoadMaxDuration: number;
        lazyLoadRecoverDuration: number;
        deferLoadAfterSourceOpen: boolean;
        autoCleanupMaxBackwardDuration: number;
        autoCleanupMinBackwardDuration: number;
        statisticsInfoReportInterval: number;
        fixAudioTimestampGap: boolean;
        accurateSeek: boolean;
        seekType: string;
        seekParamStart: string;
        seekParamEnd: string;
        rangeLoadZeroStart: boolean;
        customSeekHandler: any;
        reuseRedirectedURL: boolean;
        headers: any;
        customLoader: any;
    };
    e: {
        onvLoadedMetadata: any;
    };
    _pendingSeekTime: any;
    _statisticsReporter: number;
    _mediaDataSource: any;
    _mediaElement: any;
    destroy(): void;
    on(event: any, listener: any): void;
    off(event: any, listener: any): void;
    attachMediaElement(mediaElement: any): void;
    detachMediaElement(): void;
    load(): void;
    unload(): void;
    play(): any;
    pause(): void;
    get type(): string;
    get buffered(): any;
    get duration(): any;
    set volume(arg: any);
    get volume(): any;
    set muted(arg: any);
    get muted(): any;
    set currentTime(arg: any);
    get currentTime(): any;
    get mediaInfo(): {
        mimeType: string;
    };
    get statisticsInfo(): {
        playerType: string;
        url: any;
    };
    _onvLoadedMetadata(e: any): void;
    _reportStatisticsInfo(): void;
}
