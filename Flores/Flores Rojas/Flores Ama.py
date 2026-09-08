import turtle

# Configuración inicial
screen = turtle.Screen()
screen.bgcolor("skyblue")
t = turtle.Turtle()
t.shape("turtle")
t.color("brown")
t.speed(0)

# Función para dibujar un pétalo
def dibujar_petal(t, radio):
    t.pensize(2)
    t.pencolor("black")
    t.color("yellow")  # Cambio aquí: pétalos en amarillo
    t.begin_fill()
    t.circle(radio, 60)
    t.left(120)
    t.circle(radio, 60)
    t.end_fill()
    t.pencolor("brown")
    t.pensize(1)

# Función para dibujar la flor
def dibujar_girasol():
    radio = 100

    t.penup()
    t.goto(0, -100)
    t.pendown()
    t.pensize(8)
    t.left(90)
    t.color("green")
    t.forward(180)

    for _ in range(18):
        dibujar_petal(t, radio)
        t.right(20)

    t.penup()
    t.goto(8, 80)
    t.pendown()
    t.color("brown")
    t.begin_fill()
    t.circle(10)
    t.end_fill()

# Dibujar el fondo de la tierra
t.penup()
t.goto(-400, -100)
t.pendown()
t.color("green")
t.begin_fill()
for _ in range(2):
    t.forward(800)
    t.right(90)
    t.forward(200)
    t.right(90)
t.end_fill()

# Dibujar la flor
dibujar_girasol()

# Escribir mensaje
t.penup()
t.goto(0, 200)
t.color("red")
t.write("Gracias por ser mi Mejor Amiga", align="center", font=("Arial", 20, "bold"))

# Ocultar tortuga y ajustar tamaño de la ventana
t.hideturtle()

# Ajustar tamaño de la ventana para que no quede en pantalla completa
turtle.setup(width=800, height=600)

turtle.done()