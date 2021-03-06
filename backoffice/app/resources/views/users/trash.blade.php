@extends('layouts.app')
@section('content')
    <!-- Here the deleted users come -->
<h1>Soft Deleted {{$title}}</h1>

    @if(count($users) > 0)
        @foreach($users as $user)
            <p> {{$user->id}} </p>
        <p> {{$user->user_name}} </p>
            <p> {{$user->first_name}} </p>
            <td class="align-middle">
                <form method="POST" action="{{ route('users.restore', $user->id) }}">
                    {{csrf_field()}}
                    <button class="btn btn-danger" type="submit">Restore</button> 
                </form>
            </td>

            <td class="align-middle">
                <form method ="POST" action="{{ route('users.hardDelete', $user->id) }}">
                    @method('DELETE')
                    {{csrf_field()}}
                    <button class="btn btn-danger" type="submit">Delete Forever</button> 
                </form>
            </td>
            <td class="align-middle">
                <a class="btn btn-secondary" href="{{route('users.show', $user->id)}}">Detail</a>
            </td>
        @endforeach
    @else
        <td>No Users Deleted!</td>
    @endif


@endsection('content')
