import	React	from	'react';

function	Icon({width = 16, height = 16, className, onClick}) {
	return (
		<svg onClick={onClick} width={width} height={height} className={className} viewBox={'0 0 512 512'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
			<g><path d={'M322.516 37.237c-1.803.002-3.542.234-5.306.377l-51.752 85.42c61.384 5.321 91.779 33.505 102.81 61.26l-16.726 6.646c-7.707-19.39-26.96-40.824-72.317-48.174 19.162 13.713 33.542 29.578 40.928 48.9l-16.814 6.427c-7.863-20.571-27.13-38.098-55.735-53.84-10.062 4.12-61.61 25.173-79.455 31.217-37.145 12.579-57.377 38.092-95.982 82.9l-.131.15-.135.145c-6.262 6.652-8.894 12.653-9.498 17.03-.604 4.375.484 7.097 2.408 9.13 3.848 4.066 14.178 6.64 29.47-3.732l.075-.051 75.041-48.772 10.854 14.301-51.455 45.31-94.098 86.962c-11.929 11.024-11.736 21.742-8.95 25.441 1.394 1.85 3.499 3.27 8.583 3.041 5.084-.229 12.946-2.695 22.781-9.432 29.733-20.365 57.435-40.716 81.75-65.261l-.053-.223.367-.092c.172-.173.347-.342.518-.515l.35.293a107.655 107.655 0 0 0 10.084-3.188c6.013-2.246 12.442-6.342 13.205-7.377.324-.44 2.174-6.693 2.49-12.154.316-5.461.006-10.104.006-10.104l17.957-1.232s.397 5.64.008 12.375c-.39 6.734-.655 14.586-5.977 21.8-5.76 7.81-14.184 10.863-21.392 13.555a116.939 116.939 0 0 1-6.326 2.143c-24.372 32.684-55.333 57.576-83.96 83.508-9.904 8.972-14.003 16.689-14.915 21.431-.913 4.743.134 6.407 2.586 8.18 4.902 3.546 21.164 4.119 37.998-11.39 33.014-30.417 65.222-60.634 89.838-96.72l.812.483c1.444-.624 4.209-1.855 7.963-3.904 4.97-2.713 10.363-7.018 11.084-8.106.685-1.033 2.533-7.58 3.088-13.133.555-5.552.512-10.205.512-10.205l17.998-.193s.064 5.543-.6 12.19c-.665 6.646-1.366 14.304-5.996 21.289-4.666 7.038-11.527 10.72-17.463 13.959-1.81.988-3.477 1.826-5.023 2.578-16.473 29.911-40.153 55.83-65.37 82.955-5.39 5.798-6.381 10.204-6.062 13.312.32 3.108 2.042 5.768 5.422 7.867 6.76 4.2 19.635 4.864 31.433-7.312 13.606-14.042 25.93-28.72 36.664-44.297 9.298-16.962 18.75-34.088 27.762-51.195l.584.271c.878-.286 3.91-1.295 7.867-3.045 4.577-2.023 9.602-5.513 10.053-6.093.437-.563 2.57-6.262 3.397-11.168.826-4.907 1.06-9.057 1.06-9.057l17.975.99s-.274 5.05-1.285 11.057c-1.012 6.006-2.046 12.933-6.934 19.222-4.902 6.308-11.39 9.038-16.986 11.512-.859.38-1.641.691-2.45 1.024-7.137 16.201-15.774 31.408-25.623 45.804-3.572 6.519-7.224 13.13-10.648 19.502-3.152 5.866-3.348 10.106-2.637 12.965.712 2.86 2.318 4.716 4.73 5.94 4.825 2.448 13.382 2.178 21.13-8.612 57.44-79.992 126.521-160.277 157.107-264.986 2.243-7.679 7.14-11.461 12.994-16.895 5.854-5.433 12.982-11.267 19.97-17.056 6.99-5.79 13.841-11.54 18.83-16.39 3.311-3.22 5.419-6.373 6.458-7.813-2.444-9.527-6.436-19.066-11.633-28.252-11.087 7.119-23.137 13.666-32.795 18.957 6.175-14.902 9.925-30.611 12.399-46.746a155.243 155.243 0 0 0-16.739-15.631c-21.237-17.053-46.035-27.498-68.178-27.473zm-166.379 3.994a61.68 61.68 0 0 0-2.384.01c-12.954.302-28.804 5.21-44.079 13.473-8.182 4.426-16.129 9.83-23.459 15.855 2.418 19.238 6.328 37.979 13.625 55.59-12.265-6.72-28.379-15.468-41.486-24.84-5.205 8.198-8.804 16.525-10.203 24.451.6 2.778 3.535 8.694 8.945 15.264 5.898 7.162 14.06 15.165 22.448 22.916 8.387 7.752 16.99 15.27 24.013 21.895 1.998 1.884 3.852 3.573 5.573 5.209 15.831-14.625 32.157-25.492 53.246-32.633 14.01-4.745 56.236-21.829 72.2-28.319l-52.18-76.707c-5.932-8.301-14.54-11.984-26.259-12.164zM395.985 207.82c-4.581 14.599-9.854 28.711-15.686 42.397l29.274 16.236.076.045c15.98 9.278 26.106 5.987 29.66 1.662 1.777-2.163 2.672-4.952 1.764-9.275-.908-4.324-3.953-10.127-10.664-16.325l-.291-.271-.268-.295c-12.296-13.554-23.467-24.77-33.865-34.174zm-26.809 66.66c-12.18 24.887-26.055 48.39-40.76 70.897 26.935 33.764 60.806 61.355 95.481 89.084 17.877 14.295 34.057 12.587 38.7 8.707 2.32-1.94 3.251-3.673 2.01-8.34-1.243-4.667-5.87-12.08-16.378-20.338-31.775-24.973-66.027-48.625-93.252-81.777l12.916-12.457c26.194 23.147 55.562 41.715 86.998 60.16 10.282 6.033 18.295 7.943 23.383 7.816 5.088-.127 7.089-1.69 8.35-3.633 2.521-3.884 1.964-14.59-10.705-24.753l-99.944-80.174-6.799-5.192zm-51.771 87.373a1279.264 1279.264 0 0 1-16.785 23.952c5.713 8.955 11.47 17.89 17.183 26.777 11.799 14.79 25.119 28.572 39.674 41.63 12.62 11.323 25.417 9.758 31.867 5.096 3.226-2.33 4.759-5.103 4.86-8.226.101-3.123-1.196-7.448-6.979-12.856-26.478-24.761-51.405-48.475-69.82-76.373zm-29.057 40.832a4530.38 4530.38 0 0 1-18.058 24.438c7.546 8.835 15.018 17.636 22.326 26.441 8.482 10.222 17.036 9.89 21.678 7.112 2.32-1.39 3.794-3.352 4.304-6.254.51-2.902.017-7.119-3.537-12.75-3.863-6.123-7.972-12.466-11.994-18.723a297.326 297.326 0 0 1-14.719-20.264z'} fill={'currentcolor'} fillOpacity={'1'}></path></g>
		</svg>
	);
}

export default Icon;
