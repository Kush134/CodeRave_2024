import google.generativeai as genai
from dotenv import load_dotenv
import os
import json
import random


load_dotenv()
KEY = os.environ.get("KEY")
genai.configure(api_key=KEY)


def prompt_flashcards(prompt):
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(
        "Given the following transcript, make 10 flashcards. Return these in JSON format. It should be a list of lists, where each sublist is two elements where the first element is the question/vocab word and the second element is the answer/definition. Don't output anything besides the JSON. Here is the transcript"
        + prompt
    )
    text = response.text
    text = "".join(text.split("\n")[1:-1])
    return json.loads(text)


def prompt_quiz(prompt):
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(
        "Given the following transcript, I want you to generate a quiz with 10 questions. The quiz should be in JSON format. It should be a list of JSON objects. Each JSON object should have three fields:question, possible_answers, and index.  Question is a string. possible_answers should be a list of possible answers. Only one answer should be correct.  index should be a number and should be the index of the correct answer. Remember to put the answer in a random index so its harder to cheat! Please shuffle!!! Do not say anything other than this JSON"
        + prompt
    )
    text = response.text
    text = "".join(text.split("\n")[1:-1])
    # need to shuffle possible answers because a lot of the times gemini does not do that

    j = json.loads(text)
    for question in j:
        ans = question["possible_answers"][question["index"]]
        random.shuffle(question["possible_answers"])
        question["index"] = question["possible_answers"].index(ans)

    return j


def prompt_summary(prompt):
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(
        "Given the following transcript, give a thorugh summary of the main parts. Be as detailed as possible. Have a few main points which are bolded, and a lot of smaller subpoints, which use bullet points and are under the mainpoints.  USE MARKDOWN. DO NOT WRITE ANYTHING ELSE EXCEPT THE SUMMARY. FOR EXAMPLE, DO NOT WRITE Summary of Main Points: or Main Points: Start with an Overview"
        + prompt
    )
    return response.text


def prompt_title(prompt):
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(
        "Give me a title for this transcript. Should not be very long. Say nothing else except the title."
        + prompt
    )
    return response.text


def prompt_everyting(prompt):
    summary = prompt_summary(prompt)
    flash_cards = prompt_flashcards(prompt)
    quiz = prompt_quiz(prompt)
    title = prompt_title(prompt)

    return {
        "summary": summary,
        "flash_cards": flash_cards,
        "quiz": quiz,
        "title": title,
    }


prompt = """ in this video we are going to do math
 specifically we are going to do a type of math called topology and I'm going to give you a five minute coarsened apology
 now you might be asking what's apology is and it turns out to be really simple topology is just the study of how topological spaces on their properties are preserved under homeomorphism if you'd like to learn more you can buy the companion text book that I wrote for this course which is available at all major academic book stores
 here on this slide you can see a bunch of topological pictures including a nod a Mobius strip and a coffee mug turning into a donut
 these images make topology look way more fun and interesting than it actually is I will not be referring to these images again at any point during the course
 now before we begin the course I think it's very important to establish why we would want to study topology and what the point of all this is
 well as we all know topological spaces are transformed using continuous mass and of course continuous maps are arrows in the category of topological spaces and we know that we need arrows to understand functors and of course when you talk to her is to understand natural Transformations and we need natural transformations in order to understand dad's joint doctors
 so as you can see topology of the number of practical applications now that were properly motivated let's begin the course
 definition 1.10 topology t on ex is a family of such an act such that the empty set is in TX is in tea the possibly internet Union of any sense into using tea and the finite intersection of any certainty is in tea
 you're 1.2 a subset Q of the real numbers is open in the euclidean topology if and only if it is a union of open intervals and we can see the definition of euclidean ecology here
 proof for the proof exercise 1.3
 exercise 1.3 proof theorem 1.2
 definition 1.4 let X be a set with a topology t a subset P of X is closed if it's compliment X - P also written pea-souper skripsi is open in tea
 definition 1.5 the closure P bar of a settee is the union of p and all its limit points were a limited point of asset Jay is a point where I where every neighborhood of why contains the point in Jay different than white self
 dear 1.6 the closure of a set is closed
 for this proof will denote open sets by the letter c will denote ordinary sets by the letter P and will denote points by the Greek letter capital r o
 suppose that Roe is not in T Bar then there exists a cero such that Rose and Ciro and Ciro intersex p is the empty said clearly PRC is the union of says cero such that Rose in PRC since the union therefore P bar is closed this completes the proof
 If you find this prove confusing please look at this easy to understand diagram
 definition 1.7 compactness now I'd like to emphasize that this definition is very very important I would even say that if you don't understand compactness then you don't understand apology the topological space access compact if every open cover has a finite subcover    
 so please make sure you understand this definition
 your 1.8 the I need a real serum the honey Burrell theorem states that every clothes battered subset of our and is compact
 proof start by taking a close bounded subset pnrn the fact that P is compact Pollos Trivoli from the fact that he is close to bounded this completes the proof
 are in 1.9 the pointer a conjecture the blank are a conjecture states that every Simply Connected clothes 3 manifold is homeomorphic to the three spear
 proof this proof is left as an exercise to do your
 all right so if your 1.9 is a fun little problem that you can try and tackle on your evenings and weekends
 all right that's it and this completes my online course on topology graduations for finishing it
 now those of you who are in the topology class right now in school might have some additional questions
 you might be asking yourself why you're paying thousands of dollars to study things like open and closed sets that have no social value and contribute nothing to society
 this is a very important question and it's a question you'll be asking yourself everyday when you go to a magical place called graduate school"""

# kurzgesagt Quantum Computer Video
prompt2 = """
Quantum Computers Explained – Limits of Human Technology

For most of our history, human technology consisted of our brains, fire, and sharp sticks.

While fire and sharp sticks became power plants and nuclear weapons,

the biggest upgrade has happened to our brains.

Since the 1960's, the power of our brain machines has kept growing exponentially,

allowing computers to get smaller and more powerful at the same time.

But this process is about to meet its physical limits.

Computer parts are approaching the size of an atom.

To understand why this is a problem, we have to clear up some basics.

In a Nutshell - By Kurzgesagt

A computer is made up of very simple components

doing very simple things.

Representing data, the means of processing it, and control mechanisms.

Computer chips contain modules, which contain logic gates, which contain transistors.

A transistor is the simplest form of a data processor in computers,

basically a switch that can either block, or open the way for information coming through.

This information is made up of bits

which can be set to either 0 or 1.

Combinations of several bits are used to represent more complex information.

Transistors are combined to create logic gates which still do very simple stuff.

For example, an AND Gate sends an output of 1 if all of its inputs are 1, and a output of 0 otherwise.

Combinations of logic gates finally form meaningful modules, say, for adding two numbers.

Once you can add, you can also multiply,

and once you can multiply, you can basically do anything.

Since all basic operations are literally simpler than first grade math,

you can imagine a computer as a group of 7-year-olds answering really basic math questions.

A large enough bunch of them could compute anything

from astrophysics to Zelda.

However, with parts getting tinier and tinier,

quantum physics are making things tricky.

In a nutshell, a transistor is just an electric switch.

Electricity is electrons moving from one place to another.

So, a switch is a passage that can block electrons from moving in one direction.

Today, a typical scale for transistors is 14 nanometers,

which is about 8 times less than the HIV virus' diameter,

and 500 times smaller than a red blood cell.

As transistors are shrinking to the size of only a few atoms,

electrons may just transfer themselves to the other side of a blocked passage

via a process called Quantum Tunneling.

In the quantum realm, physics works quite differently from the predictable ways we're used to,

and traditional computers just stop making sense.

We are approaching a real physical barrier for our technological progress.

To solve this problem,

scientists are trying to use these unusual quantum properties to their advantage

by building quantum computers.

In normal computers, bits are the smallest unit of information.

Quantum computers use qubits which can also be set to one of two values.

A qubit can be any two level quantum system,

such as a spin and a magnetic field, or a single photon.

0 and 1 are this system's possible states,

like the photons horizontal or vertical polarization.

In the quantum world, the qubit doesn't have to be just one of those,

it can be in any proportions of both states at once.

This is called superposition.

But as soon as you test its value, say, by sending the photon through a filter,

it has to decide to be either vertically or horizontally polarized.

So as long as it's unobserved,

the qubit is in a superposition of probabilities for 0 and 1, and you can't predit which it'll be.

But the instant you measure it,

it collapses into one of the definite states.

Superposition is a game changer.

Four classical bits can be in one of two to the power of four different configurations at a time.

That's 16 possible combinations, out of which you can use just one.

Four qubits in superposition, however, can be in all of those 16 combinations at once.

This number grows exponentially with each extra qubit.

Twenty of them can already store a million values in parallel.

A really weird and unintuitive property qubits can have is Entanglement,

a close connection that makes each of the qubits react to a change in the other's state instantaneously,

no matter how far they are apart.

This means when measuring just one entangled qubit, you can directly deduce properties of it's partners

without having to look.

Qubit Manipulation is a mind bender as well.

A normal logic gate gets a simple set of inputs and produces one definite output.

A quantum gate manipulates an input of superpositions, rotates probabilities,

and produces another superposition as its output.

So a quantum computer sets up some qubits, applies quantum gates to entangle them and manipulate probabilities,

then finally measures the outcome, collapsing superpositions to an actual sequence of 0s and 1s.

What this means is that you get the entire lot of calculations that are possible with your setup, all done at the same time.

Ultimately, you can only measure one of the results and it'll only probably be the one you want,

so you may have to double check and try again.

But by cleverly exploiting superposition and entanglement,

this can be exponentially more efficient than would ever be possible on a normal computer.

So, while quantum computers will not probably not replace our home computers,

in some areas, they are vastly superior.

One of them is database searching.

To find something in a database, a normal computer may have to test every single one of its entries.

Quantum computers algorithms need only the square root of that time,

which for large databases, is a huge difference

The most famous use of quantum computers is ruining IT security.

Right now, your browsing, email, and banking data is being kept secure by an encryption system

in which you give everyone a public key to encode messages only you can decode.

The problem is that this public key can actually be used to calculate your secret private key.

Luckily, doing the necessary math on any normal computer would literally take years of trial and error.

But a quantum computer with exponential speed-up could do it in a breeze.

Another really exciting new use is simulations.

Simulations of the quantum world are very intense on resources,

and even for bigger structures, such as molecules, they often lack accuracy.

So why not simulate quantum physics with actual quantum physics?

Quantum simulations could provide new insights on proteins that might revolutionize medicine.

Right now, we don't know if quantum computers will be just a specallized tool,

or a big revolution for humanity.

We have no idea where the limits of technology are,

and there's only one way to find out.
"""


