#define PI 3.14159265359
#define EXP 2.71828182846
varying vec2 vUv;
uniform float uTime;

float w1=3.;
float w2=1.;
float w3=20.;
float A=1.;
float R=8.;

float horizontal(in vec2 xy,float t){
    float v=cos(w1*xy.x+A*t);
    return v;
}

float diagonal(in vec2 xy,float t){
    float v=cos(w2*(xy.x*cos(t)+5.*xy.y*sin(t))+A*t);
    return v;
}
float radial(in vec2 xy,float t){
    float x=.3*xy.x-.5+cos(t);
    float y=.3*xy.y-.5+sin(t*.5);
    float v=sin(w3*sqrt(x*x+y*y+1.)+A*t);
    return v;
}

float map(float a,float b,float c,float d,float x){
    return((x-a)*(d-c)/(b-a))+c;
}

float log_map(float a,float b,float c,float d,float x){
    float x1=map(a,b,1.,EXP,x);
    return log(x1)*(d-c)+c;
}

void main(){
    float t=uTime*.5;
    vec2 xy=vUv;
    float v=horizontal(xy,t);
    v+=diagonal(xy,t);
    v+=radial(xy,t);
    v/=3.;
    float r=map(-1.,1.,.75,1.,sin(PI*v));
    float g=map(-1.,1.,0.,.8,sin(PI*v));
    g+=log_map(-1.,1.,0.,.1,cos(PI*v));
    float b=map(-1.,1.,0.,.1,sin(PI*v));
    gl_FragColor=vec4(pow(r,R),pow(g,R),pow(b,R),1.);
}