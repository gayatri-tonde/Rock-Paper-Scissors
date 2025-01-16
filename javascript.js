function compChoice(){
    let a = Math.floor(Math.random()*3)
    return check(a)
}
function check(a)
{
    if (a==1)
    {
        return"rock"
    }
    else if (a==2)
    {
        return "paper"
    }
    else
    {
        return "scissor"
    }
    return compChoice()
}console.log(compChoice())