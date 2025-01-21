import { map, tap, fromEvent } from "rxjs";

export const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor risus, iaculis non mi et, feugiat accumsan orci. Integer nibh risus, maximus ut felis et, finibus ornare mauris. Suspendisse eu sollicitudin nisi. Proin pulvinar urna turpis, vel dignissim neque placerat at. Phasellus vulputate commodo diam quis pellentesque. Sed eu rhoncus diam, et viverra sapien. Aliquam erat volutpat. Donec vulputate egestas neque at scelerisque. Maecenas placerat scelerisque metus nec egestas. Nunc tempor, lectus sodales egestas mollis, leo velit tempor eros, blandit fermentum felis mi nec ante. Nam eget malesuada lacus, ac blandit sapien. Pellentesque egestas libero eu magna dictum, quis ultricies felis dignissim.
<br/>
Proin eu ex sagittis, congue turpis ut, varius ipsum. Nunc tincidunt nulla eget lacus interdum facilisis. Etiam congue mi urna, quis fringilla ante euismod sit amet. Quisque vitae metus laoreet, aliquet nulla sed, dignissim erat. Sed rhoncus blandit dignissim. Vestibulum placerat erat eu lectus venenatis sodales in ut ex. Vivamus vel mi vitae mauris placerat lacinia non ornare dolor. Aliquam vel efficitur felis. Donec sed consectetur tortor. Fusce efficitur dapibus orci, at cursus dolor porttitor a. Suspendisse aliquet non nulla quis vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam dictum est risus, nec consectetur elit vehicula at.
<br/>
Nulla tincidunt eget ex ac aliquet. Ut ut ex felis. Sed et condimentum neque. Vestibulum sit amet metus eu sapien tincidunt imperdiet. Maecenas congue vitae ex vitae ullamcorper. Mauris porttitor mauris accumsan aliquet sagittis. Nunc fermentum vitae diam eget convallis. Etiam et pellentesque eros, ac consectetur nulla. Proin consectetur nibh nisi. Suspendisse iaculis, ex id aliquet facilisis, eros lectus cursus tortor, vitae feugiat urna felis vel enim. Integer aliquet elit id ligula imperdiet ullamcorper. Quisque lacinia lobortis lectus. Ut lacinia euismod nibh, at imperdiet metus facilisis ut. Quisque pretium imperdiet ultrices. Curabitur eu metus quis urna bibendum sollicitudin. Cras congue leo est, vitae eleifend ex pretium sed.
<br/>
Praesent non sem et ligula bibendum scelerisque. Fusce vitae mi dapibus, auctor urna eget, eleifend mauris. Aenean vel volutpat ex. Maecenas mollis est ut est varius sollicitudin. Etiam posuere luctus elit, sed euismod lacus molestie a. Duis aliquet purus sem, vitae dapibus mi pharetra nec. Nullam fermentum dolor vel posuere egestas. Nulla facilisi. Aliquam erat volutpat. Nulla facilisi. Aliquam quis dictum turpis. Sed eu suscipit lacus.
<br/>
Nullam neque odio, lacinia eget scelerisque at, varius at massa. Praesent ultrices tellus in lacus commodo eleifend. Aenean odio mauris, bibendum iaculis tempor sed, facilisis eu odio. Proin placerat suscipit massa, eu venenatis urna condimentum et. Nulla euismod scelerisque dolor sit amet posuere. Mauris rutrum nulla elit, tincidunt ultrices diam sagittis in. Nulla facilisi. Nunc malesuada nunc nunc, at vestibulum nulla sagittis sit amet. In eget gravida odio. Nunc a posuere diam. Integer nec massa vitae lectus bibendum tempus vitae sed arcu.
`;

export const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");

body.append(progressBar);

const scroll$ = fromEvent(document, "scroll");

// scroll$.subscribe(console.log)

const calcPercentScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;
    return (scrollTop  / (scrollHeight - clientHeight)) * 100;
};

const progress$ = scroll$.pipe(
  map((event) => calcPercentScroll(event)),
  tap( console.log)
);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
