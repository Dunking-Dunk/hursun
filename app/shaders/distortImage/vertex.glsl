varying vec2 vUv;
uniform vec2 uOffset;
uniform float time;

float M_PI=3.141529;

vec3 deformationCurve(vec3 position,vec2 uv,vec2 offset){
    position.x=position.x+(sin(uv.y*M_PI*10.*.3)*offset.x)*2.;
    position.y=position.y+(sin(uv.x*M_PI*10.*.3)*offset.y)*2.;
    return position;
}

void main(){
    vUv=uv;
    vec3 newPosition=deformationCurve(position,uv,uOffset);
    gl_Position=projectionMatrix*modelViewMatrix*vec4(newPosition,1.);
}