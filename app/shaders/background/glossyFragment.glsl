varying vec2 vUv;
uniform float uTime;

void main()
{
    float mr=min(vUv.x,vUv.y);
    vec2 uv=vUv;
    
    float d=-uTime*.5;
    float a=0.;
    for(float i=0.;i<8.;++i){
        a+=cos(i-d-a*uv.x);
        d+=sin(uv.y*i+a);
    }
    d+=uTime*.5;
    vec3 col=vec3(cos(uv*vec2(d,a))*.6+.4,cos(a+d)*.5+.5);
    col=cos(col*cos(vec3(d,a,2.5))*.5+.5);
    gl_FragColor=vec4(col,1.);
}