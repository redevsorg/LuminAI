import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/Login')({
    component: Login,
});

function Login() {
    return (
        <p></p>
    )
}