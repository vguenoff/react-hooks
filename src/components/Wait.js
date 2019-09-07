import useWait from '../hooks/useWait';

export default function Wait({ delay = 1000, placeholder, ui }) {
    const show = useWait(delay);

    return show ? ui : placeholder;
}
