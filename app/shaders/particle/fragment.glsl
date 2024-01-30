varying vec2 vUv;
varying vec4 vColor;
void main(){
    vec3 color1=vec3(1.,.902,0.);
    vec3 color2=vec3(1.,.5686,0.);
    vec3 color=mix(color2,color1,.2);
    gl_FragColor=vColor*vec4(color,1.);
}