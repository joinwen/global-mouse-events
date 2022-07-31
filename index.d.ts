import EventEmitter from 'events';

export default new (class MouseEvents extends EventEmitter {
    constructor();
    pauseMouseEvents(): boolean;
    resumeMouseEvents(): boolean;
})()