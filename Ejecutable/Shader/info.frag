#version 330 core
out vec4 FragColor;

in vec2 TexCoords;

uniform sampler2D texturaInfo;

void main()
{
    vec4 texColor = texture(texturaInfo, TexCoords);
    if (texColor.a < 0.1)
        discard;
    FragColor = texColor;
}