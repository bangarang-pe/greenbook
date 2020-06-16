
export default function Icons(props) {
    if (props.type === 'right') {
         return (
            <svg style={Object.assign({}, props.style, {transform: 'rotate(180deg)'})} fill={props.color || '#000'}  viewBox="0 0 443.52 443.52">
                <path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
                    c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
                    L143.492,221.863z"/>
            </svg>         );
    } else if (props.type === 'left') {
         return (
            <svg style={props.style || {}} fill={props.color || '#000'}  viewBox="0 0 443.52 443.52">
                <path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
                    c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
                    L143.492,221.863z"/>
            </svg>
         );
    } else if (props.type === 'close') {
         return (
           <svg viewBox="0 0 14 14">
            <g style={props.style || {}} fill="none" fillRule="evenodd"  stroke="none" strokeWidth="1">
                <g fill={props.color || '#000'} transform="translate(-341.000000, -89.000000)">
                    <g id="close" transform="translate(341.000000, 89.000000)">
                        <path d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z" />
                    </g>
                </g>
            </g>
            </svg>
         );
    } else if (props.type === 'scrollDown') {
         return (
            <svg style={props.style || {}} viewBox="4 4 12 12">
              <g transform="translate(-306.127 377) rotate(-90)">
                <path fill={props.color || '#000'} d="M2.646,6.054,6.792,1.907a1.136,1.136,0,0,0,0-1.534,1.136,1.136,0,0,0-1.534,0L.373,5.316h0a1.136,1.136,0,0,0,0,1.534l4.885,4.885a1.1,1.1,0,0,0,.742.34.916.916,0,0,0,.738-.341,1.136,1.136,0,0,0,0-1.534Z" transform="translate(362.91 310.05)"/>
              </g>
            </svg>
         );
    } else if (props.type === 'tag') {
         return (
            <svg style={props.style || {}} viewBox="0 0 477.863 477.863">
                <path fill={props.color || '#000'} d="M460.796,0H273.063c-4.526,0.001-8.866,1.8-12.066,5.001l-256,256c-6.663,6.665-6.663,17.468,0,24.132L192.73,472.866
                    c6.665,6.662,17.468,6.662,24.132,0l256-256c3.201-3.2,5-7.54,5.001-12.066V17.067C477.863,7.641,470.222,0,460.796,0z
                     M443.73,197.734L204.796,436.668L41.195,273.067L280.129,34.133H443.73V197.734z"/>
                <path fill={props.color || '#000'} d="M358.396,68.267c-28.277,0-51.2,22.923-51.2,51.2s22.923,51.2,51.2,51.2s51.2-22.923,51.2-51.2
                    S386.673,68.267,358.396,68.267z M358.396,136.533c-9.426,0-17.067-7.641-17.067-17.067s7.641-17.067,17.067-17.067
                    s17.067,7.641,17.067,17.067S367.822,136.533,358.396,136.533z"/>
            </svg>
         );
    } else if (props.type === 'phone') {
         return (
            <svg style={props.style || {}} viewBox="0 0 24 24" fill="none" stroke={props.color || '#000'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
         );
    } else if (props.type === 'instagram') {
         return (
            <svg style={props.style || {}} viewBox="0 0 24 24" fill="none" stroke={props.color || '#000'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
         );
    } else if (props.type === 'link') {
         return (
            <svg style={props.style || {}} viewBox="0 0 24 24" fill="none" stroke={props.color || '#000'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
         );
    } else if (props.type === 'services') {
         return (
            <svg style={props.style || {}} viewBox="0 0 24 24" fill="none" stroke={props.color || '#000'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
         );
    } else {
        return (<span>no icon</span>)
    }
}
