## Parallel and Concurrency

In a nutshell, the main difference between concurrency and parallelism is that **concurrency** is about dealing with a lot of things at same time while **parallelism** is about doing a lot of things at the same time for increasing the speed.

well, what does that mean?

let's take a look at the picture below

![alt text](https://luminousmen.com/media/concurrency-and-parallelism-are-different.jpg)


As you can see, the upper machine is dealing with 2 queues at the same time, but it does not wait until one of the queue line is finished, instead, it serve one person from one queue and then another person from the other queue. So basically, it is handling multiple things at once. That is concurrency.

Where the lower machine serve each line with seperate machine, so each machine have similar, but different task to complete. that's Parallelism.

